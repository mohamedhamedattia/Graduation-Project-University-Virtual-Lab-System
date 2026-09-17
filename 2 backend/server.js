// server.js (HTTPS complete version for Red Hat / Docker)
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3443; // HTTPS port

// IP السيرفر: استخدم IP الشبكة المحلية للسيرفر
const SERVER_IP = process.env.SERVER_IP || '192.168.2.145'; // ضع هنا IP سيرفرك أو اجعلها environment variable

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ===== MySQL Connection Pool =====
const db = mysql.createPool({
    host: process.env.MYSQL_HOST || 'mysql', // اسم الخدمة في docker-compose
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'university_lab',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// ===== HELPER FUNCTIONS =====
async function getStudentById(studentId) {
    const [rows] = await db.execute('SELECT * FROM students WHERE studentId = ?', [studentId]);
    return rows[0];
}
// ===== API ROUTES =====

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'University Lab System API is running (HTTPS)' });
});

// Student Registration
app.post('/api/students/register', async (req, res) => {
    try {
	const { studentId, name, faculty, department, password } = req.body;
        if (!studentId || !name || !faculty || !department || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existing = await getStudentById(studentId);
        if (existing) return res.status(400).json({ error: 'Student ID already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const registrationDate = new Date();

        await db.execute(
            'INSERT INTO students (studentId, name, faculty, department, password, registrationDate) VALUES (?, ?, ?, ?, ?, ?)',
            [studentId, name, faculty, department, hashedPassword, registrationDate]
        );

        res.json({ message: 'Registration successful', studentId });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Student Login
app.post('/api/students/login', async (req, res) => {
    try {
	const { studentId, password } = req.body;
        if (!studentId || !password) return res.status(400).json({ error: 'Student ID and password are required' });

        const student = await getStudentById(studentId);
        if (!student) return res.status(401).json({ error: 'Invalid credentials' });

        const isValidPassword = await bcrypt.compare(password, student.password);
        if (!isValidPassword) return res.status(401).json({ error: 'Invalid credentials' });

        // Update last login and access count
        await db.execute(
            'UPDATE students SET lastLogin = ?, accessCount = accessCount + 1 WHERE studentId = ?',
            [new Date(), studentId]
        );

        // Log activity
        await db.execute(
            'INSERT INTO activities (studentId, action, timestamp) VALUES (?, ?, ?)',
            [studentId, 'Logged in', new Date()]
        );

	const { password: _, ...studentData } = student;
        res.json({ message: 'Login successful', student: studentData });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Log Activity
app.post('/api/activities/log', async (req, res) => {
    try {
	const { studentId, action } = req.body;
        if (!studentId || !action) return res.status(400).json({ error: 'Student ID and action are required' });

        await db.execute(
            'INSERT INTO activities (studentId, action, timestamp) VALUES (?, ?, ?)',
            [studentId, action, new Date()]
        );

        res.json({ message: 'Activity logged successfully' });
    } catch (error) {
        console.error('Activity logging error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get Student Profile
app.get('/api/students/:studentId', async (req, res) => {
    try {
	const student = await getStudentById(req.params.studentId);
        if (!student) return res.status(404).json({ error: 'Student not found' });

        const { password, ...studentData } = student;
        res.json({ student: studentData });
    } catch (error) {
        console.error('Get student error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin - Get All Students
app.get('/api/admin/students', async (req, res) => {
    try {
	const [rows] = await db.execute('SELECT studentId, name, faculty, department, registrationDate, lastLogin, accessCount FROM students');
        res.json({ students: rows });
    } catch (error) {
        console.error('Get all students error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin - Get Statistics
app.get('/api/admin/stats', async (req, res) => {
    try {
	const [students] = await db.execute('SELECT * FROM students');
        const [activities] = await db.execute('SELECT * FROM activities');

        const totalStudents = students.length;
        const today = new Date().toDateString();
        const activeToday = students.filter(s => s.lastLogin && new Date(s.lastLogin).toDateString() === today).length;

        const facultyDistribution = {};
        students.forEach(s => {
            facultyDistribution[s.faculty] = (facultyDistribution[s.faculty] || 0) + 1;
        });

	res.json({
            totalStudents,
            activeToday,
            totalActivities: activities.length,
            facultyDistribution
        });
    } catch (error) {
        console.error('Get stats error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== HTTPS CERTIFICATES =====
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};

// Start HTTPS server
https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`🚀 HTTPS Server running at https://${SERVER_IP}:${PORT}`);
    console.log(`📊 API available at: https://${SERVER_IP}:${PORT}/api`);
});