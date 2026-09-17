// ===== CONFIGURATION =====
const CONFIG = {
    STARS_COUNT: 100,
    SESSION_KEY: 'university_lab_session',
    STUDENTS_KEY: 'university_students',
    API_BASE_URL: 'https://192.168.2.145:3443/api' // تم إنشاء المنظومة بواسطة طلاب من كلية الهندسة جامعة طنطا
};

// ===== AVAILABLE LAB SYSTEMS (21 SYSTEMS) =====
const LAB_SYSTEMS = [
    {
        "id": "windows-10-pro-1",
        "name": "Windows 10 Pro",
        "icon": "💻",
        "type": "Windows",
        "description": "Standard Windows environment for general use",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Office Applications, General Computing",
        "rdpConfig": {
            "address": "win10-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "programming-lab-new",
        "name": "Development Lab",
        "icon": "👨‍💻",
        "type": "Linux",
        "description": "Specialized environment for software development",
        "specs": "6 vCPU, 12GB RAM, 300GB SSD",
        "usage": "Java, Python, C++, Web Development",
        "rdpConfig": {
            "address": "dev-lab.university.edu:3389",
            "username": "developer"
        }
    },
    {
        "id": "red-hat",
        "name": "Red Hat Enterprise Linux",
        "icon": "🐧",
        "type": "Linux",
        "description": "Enterprise Linux environment",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Enterprise Applications, Server Management",
        "rdpConfig": {
            "address": "redhat-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "windows-server-2022",
        "name": "Windows Server 2022",
        "icon": "🖥️",
        "type": "Windows Server",
        "description": "Latest Windows Server environment",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Networking, Server Management",
        "rdpConfig": {
            "address": "win-server2022-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "kali-linux",
        "name": "Kali Linux",
        "icon": "🔐",
        "type": "Linux",
        "description": "Penetration testing and security-focused Linux",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Security, Ethical Hacking, Pentesting",
        "rdpConfig": {
            "address": "kali-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "ubuntu-22",
        "name": "Ubuntu 22.04",
        "icon": "🐧",
        "type": "Linux",
        "description": "Stable Linux environment for development",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Programming, DevOps, General Development",
        "rdpConfig": {
            "address": "ubuntu22-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "debian-linux",
        "name": "Debian Linux",
        "icon": "🐧",
        "type": "Linux",
        "description": "Classic Linux environment",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Servers, Programming, DevOps",
        "rdpConfig": {
            "address": "debian-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "windows-11-pro",
        "name": "Windows 11 Pro",
        "icon": "💻",
        "type": "Windows",
        "description": "Modern Windows environment for general use",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Office Applications, General Computing",
        "rdpConfig": {
            "address": "win11-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "arch-linux",
        "name": "Arch Linux",
        "icon": "⚙️",
        "type": "Linux",
        "description": "Cutting-edge Linux environment",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Advanced Programming, Customization",
        "rdpConfig": {
            "address": "arch-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "fedora-linux",
        "name": "Fedora Linux",
        "icon": "🐧",
        "type": "Linux",
        "description": "Community-driven Linux environment",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Programming, Testing, Development",
        "rdpConfig": {
            "address": "fedora-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "centos-linux",
        "name": "CentOS Linux",
        "icon": "🐧",
        "type": "Linux",
        "description": "Community-supported server Linux",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Servers, Networking, Development",
        "rdpConfig": {
            "address": "centos-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "macos-lab",
        "name": "macOS Monterey",
        "icon": "🍎",
        "type": "macOS",
        "description": "Apple macOS environment for development",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "iOS Development, Creative Apps",
        "rdpConfig": {
            "address": "macos-lab.university.edu:3389",
            "username": "student"
        }
    },
    {
        "id": "data-science-lab",
        "name": "Data Science Lab",
        "icon": "📊",
        "type": "Linux",
        "description": "Environment for data analysis and machine learning",
        "specs": "8 vCPU, 16GB RAM, 500GB SSD",
        "usage": "Python, R, Jupyter, TensorFlow",
        "rdpConfig": {
            "address": "datascience-lab.university.edu:3389",
            "username": "data-scientist"
        }
    },
    {
        "id": "cybersecurity-lab",
        "name": "Cybersecurity Lab",
        "icon": "🛡️",
        "type": "Linux",
        "description": "Specialized environment for security training",
        "specs": "4 vCPU, 8GB RAM, 200GB SSD",
        "usage": "Security Tools, Network Analysis",
        "rdpConfig": {
            "address": "cyber-lab.university.edu:3389",
            "username": "security"
        }
    },
    {
        "id": "graphics-design-lab",
        "name": "Graphics Design Lab",
        "icon": "🎨",
        "type": "Windows",
        "description": "Environment for graphic design and multimedia",
        "specs": "6 vCPU, 16GB RAM, 500GB SSD",
        "usage": "Adobe Suite, Blender, Video Editing",
        "rdpConfig": {
            "address": "design-lab.university.edu:3389",
            "username": "designer"
        }
    },
    {
        "id": "ai-ml-lab",
        "name": "AI & Machine Learning Lab",
        "icon": "🤖",
        "type": "Linux",
        "description": "High-performance environment for AI research",
        "specs": "12 vCPU, 32GB RAM, 1TB SSD + 2TB HDD",
        "usage": "TensorFlow, PyTorch, Deep Learning",
        "rdpConfig": {
            "address": "ai-lab.university.edu:3389",
            "username": "researcher"
        }
    },
    {
        "id": "database-lab",
        "name": "Database Management Lab",
        "icon": "🗄️",
        "type": "Linux",
        "description": "Environment for database administration and development",
        "specs": "6 vCPU, 16GB RAM, 500GB SSD",
        "usage": "MySQL, PostgreSQL, MongoDB, Oracle",
        "rdpConfig": {
            "address": "database-lab.university.edu:3389",
            "username": "dba"
        }
    },
    {
        "id": "network-simulator",
        "name": "Network Simulator Lab",
        "icon": "🌐",
        "type": "Windows",
        "description": "Environment for network configuration and simulation",
        "specs": "8 vCPU, 16GB RAM, 400GB SSD",
        "usage": "Cisco Packet Tracer, Wireshark, GNS3",
        "rdpConfig": {
            "address": "network-lab.university.edu:3389",
            "username": "network-admin"
        }
    },
    {
        "id": "game-development-lab",
        "name": "Game Development Lab",
        "icon": "🎮",
        "type": "Windows",
        "description": "Specialized environment for game development",
        "specs": "8 vCPU, 32GB RAM, 1TB SSD + 2TB HDD",
        "usage": "Unity, Unreal Engine, Blender",
        "rdpConfig": {
            "address": "gamedev-lab.university.edu:3389",
            "username": "gamedev"
        }
    },
    {
        "id": "mobile-dev-lab",
        "name": "Mobile Development Lab",
        "icon": "📱",
        "type": "macOS",
        "description": "Environment for mobile app development",
        "specs": "6 vCPU, 16GB RAM, 500GB SSD",
        "usage": "Android Studio, Xcode, Flutter",
        "rdpConfig": {
            "address": "mobiledev-lab.university.edu:3389",
            "username": "mobile-dev"
        }
    },
    {
        "id": "cloud-computing-lab",
        "name": "Cloud Computing Lab",
        "icon": "☁️",
        "type": "Linux",
        "description": "Environment for cloud technologies and containerization",
        "specs": "8 vCPU, 16GB RAM, 400GB SSD",
        "usage": "Docker, Kubernetes, AWS, Azure",
        "rdpConfig": {
            "address": "cloud-lab.university.edu:3389",
            "username": "cloud-admin"
        }
    }
];

// ===== TOASTIFY HELPER =====
let activeToasts = new Set();
let lastToast = null;

function showToast(message, type = 'info') {
    if (lastToast) {
        lastToast.hideToast();
        lastToast = null;
    }

    if (activeToasts.has(message)) return null;
    activeToasts.add(message);

    const toast = Toastify({
        text: message,
        duration: 0,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        close: true,
        className: `toastify ${type}`,
        callback: function() {
            activeToasts.delete(message);
        }
    }).showToast();

    lastToast = toast;
    return toast;
}

// ===== API FUNCTIONS =====
async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Request failed:', error);
        throw error;
    }
}

// ===== PAGE MANAGEMENT =====
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// ===== SECURITY FUNCTIONS =====
async function hash(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ===== STUDENT REGISTRATION =====
async function registerStudent() {
    const studentId = document.getElementById('regStudentId').value.trim();
    const name = document.getElementById('regStudentName').value.trim();
    const faculty = document.getElementById('regFaculty').value;
    const department = document.getElementById('regDepartment').value;
    const password = document.getElementById('regPassword').value;

    if (!studentId || !name || !faculty || !department || !password) {
        showToast('Please fill in all fields.');
        return;
    }

    if (studentId.length !== 14) {
        showToast('University ID must be exactly 14 characters long.');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters long.');
        return;
    }

    try {
        const hashedPassword = await hash(password);
        const studentData = {
            studentId: studentId,
            name: name,
            faculty: faculty,
            department: department,
            password: hashedPassword
        };

        try {
            await apiRequest('/students/register', {
                method: 'POST',
                body: JSON.stringify(studentData)
            });
        } catch (error) {
            const students = JSON.parse(localStorage.getItem(CONFIG.STUDENTS_KEY) || '{}');

            if (students[studentId]) {
                showToast('This University ID is already registered.');
                return;
            }

            students[studentId] = {
                ...studentData,
                registrationDate: new Date().toISOString(),
                lastLogin: null,
                accessCount: 0
            };

            localStorage.setItem(CONFIG.STUDENTS_KEY, JSON.stringify(students));
        }

        showToast('Registration successful! You can now login.', "success");
        showPage('login');

        document.getElementById('regStudentId').value = '';
        document.getElementById('regStudentName').value = '';
        document.getElementById('regFaculty').value = '';
        document.getElementById('regDepartment').value = '';
        document.getElementById('regPassword').value = '';
    } catch (error) {
        showToast('Registration error. Please try again.');
        console.error('Registration error:', error);
    }
}

// ===== STUDENT LOGIN =====
async function login() {
    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('password').value;

    if (!studentId || !password) {
        showToast('Please enter both University ID and Password.');
        return;
    }

    try {
        const hashedPassword = await hash(password);

        let student = null;

        try {
            const response = await apiRequest('/students/login', {
                method: 'POST',
                body: JSON.stringify({ studentId, password: hashedPassword })
            });
            student = response.student;
        } catch (error) {
            const students = JSON.parse(localStorage.getItem(CONFIG.STUDENTS_KEY) || '{}');
            student = students[studentId];

            if (!student || student.password !== hashedPassword) {
                showToast('Invalid University ID or password.');
                return;
            }

            student.lastLogin = new Date().toISOString();
            student.accessCount = (student.accessCount || 0) + 1;
            students[studentId] = student;
            localStorage.setItem(CONFIG.STUDENTS_KEY, JSON.stringify(students));
        }

        sessionStorage.setItem(CONFIG.SESSION_KEY, studentId); // <--- تم التعديل هنا
        loadSystemSelection();
        showPage('systemSelection');

        document.getElementById('studentId').value = '';
        document.getElementById('password').value = '';
    } catch (error) {
        showToast('Login error. Please try again.');
        console.error('Login error:', error);
    }
}

// ===== SYSTEM SELECTION =====
function loadSystemSelection() {
    const session = sessionStorage.getItem(CONFIG.SESSION_KEY); // <--- تم التعديل هنا
    const systemsList = document.getElementById('systemsList');

    if (!session) {
        systemsList.innerHTML = '<p>Error: No active session.</p>';
        return;
    }

    let studentName = 'Student';
    try {
        const students = JSON.parse(localStorage.getItem(CONFIG.STUDENTS_KEY) || '{}');
        if (students[session]) {
            studentName = students[session].name;
        }
    } catch (error) {
        console.error('Error getting student name:', error);
    }

    document.querySelector('#systemSelection .dashboard-header h2').textContent =
        `Welcome, ${studentName}!`;
    systemsList.innerHTML = LAB_SYSTEMS.map(system => `
        <div class="system-card">
            <div class="icon">${system.icon}</div>
            <h3>${system.name}</h3>
            <p>${system.description}</p>
            
            <div class="specs">
                <p><strong>Specifications:</strong> <span>${system.specs}</span></p>
                <p><strong>Usage:</strong> <span>${system.usage}</span></p>
            </div>
            
            <div class="system-actions">
                <button onclick="connectToSystem('${system.id}')" class="primary-btn">
                    Connect to System
                </button>
                <button onclick="downloadRDPFile('${system.id}')" class="secondary-btn">
                    Download RDP File
                </button>
            </div>
        </div>
    `).join('');
}


// ===== SYSTEM CONNECTION =====
function connectToSystem(systemId) {
    const system = LAB_SYSTEMS.find(s => s.id === systemId);

    if (!system) {
        showToast('System not found!');
        return;
    }

    logStudentActivity(`Attempted to connect to: ${system.name}`);

    showToast(`Connecting to ${system.name}...\nServer: ${system.rdpConfig.address}\nUsername: ${system.rdpConfig.username}`, "success");
}

function downloadRDPFile(systemId) {
    const system = LAB_SYSTEMS.find(s => s.id === systemId);

    if (!system) {
        showToast('System not found!');
        return;
    }

    const rdpContent = `screen mode id:i:2
use multimon:i:0
desktopwidth:i:1920
desktopheight:i:1080
session bpp:i:32
winposstr:s:0,1,0,0,800,600
full address:s:${system.rdpConfig.address}
username:s:${system.rdpConfig.username}
prompt for credentials:i:1
administrative session:i:0
audiomode:i:0
videoplaybackmode:i:1
connection type:i:7
networkautodetect:i:1
bandwidthautodetect:i:1
compression:i:1`;

    const blob = new Blob([rdpContent], { type: 'application/x-rdp' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `University_${system.name.replace(/\s+/g, '_')}.rdp`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    logStudentActivity(`Downloaded RDP for: ${system.name}`);

    showToast(`RDP file for ${system.name} downloaded successfully!\nSave the file and double-click to connect.`, "success");
}

// ===== STUDENT ACTIVITY LOGGING =====
async function logStudentActivity(action) {
    const session = sessionStorage.getItem(CONFIG.SESSION_KEY); // <--- تم التعديل هنا
    if (!session) return;

    const activityData = {
        studentId: session,
        action: action,
        timestamp: new Date().toISOString()
    };

    try {
        await apiRequest('/activities/log', {
            method: 'POST',
            body: JSON.stringify(activityData)
        });
    } catch (error) {
        const students = JSON.parse(localStorage.getItem(CONFIG.STUDENTS_KEY) || '{}');
        if (!students[session]) return;

        if (!students[session].activityLog) {
            students[session].activityLog = [];
        }

        students[session].activityLog.push({
            action: action,
            timestamp: new Date().toISOString()
        });

        localStorage.setItem(CONFIG.STUDENTS_KEY, JSON.stringify(students));
    }
}

// ===== SESSION MANAGEMENT =====
function logout() {
    const session = sessionStorage.getItem(CONFIG.SESSION_KEY); // <--- تم التعديل هنا
    if (session) {
        logStudentActivity('Logged out of system');
    }
    sessionStorage.removeItem(CONFIG.SESSION_KEY); // <--- تم التعديل هنا
    showPage('login');
}

// ===== UTILITY FUNCTIONS =====
function createStars() {
    const container = document.querySelector('.stars-container');
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < CONFIG.STARS_COUNT; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${3 + Math.random() * 7}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
    }
}

// ===== ADMIN FUNCTIONS =====
async function viewAllStudents() {
    try {
        const response = await apiRequest('/admin/students');
        console.log('Registered Students:', response.students);
        return response.students;
    } catch (error) {
        const students = JSON.parse(localStorage.getItem(CONFIG.STUDENTS_KEY) || '{}');
        console.log('Registered Students:', students);
        return students;
    }
}

async function getStudentStats() {
    try {
        const response = await apiRequest('/admin/stats');
        return response;
    } catch (error) {
        const students = JSON.parse(localStorage.getItem(CONFIG.STUDENTS_KEY) || '{}');
        const totalStudents = Object.keys(students).length;
        const activeToday = Object.values(students).filter(student => {
            if (!student.lastLogin) return false;
            const lastLogin = new Date(student.lastLogin);
            const today = new Date();
            return lastLogin.toDateString() === today.toDateString();
        }).length;

        return { totalStudents, activeToday };
    }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    createStars();

    const session = sessionStorage.getItem(CONFIG.SESSION_KEY); // <--- تم التعديل هنا
    if (session) {
        loadSystemSelection();
        showPage('systemSelection');
    } else {
        showPage('cover');
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activePage = document.querySelector('.page.active').id;

            if (activePage === 'login') {
                login();
            } else if (activePage === 'register') {
                registerStudent();
            }
        }
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// ===== THEME TOGGLE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
    const lightMode = localStorage.getItem('lightMode') === 'true';
    if (lightMode) {
        document.body.classList.add('light-mode');
        const themeBtn = document.querySelector('.theme-toggle-btn');
        if (themeBtn) themeBtn.innerHTML = '🌙';
    }

    window.toggleLightMode = function() {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('lightMode', isLightMode);

        const themeBtn = document.querySelector('.theme-toggle-btn');
        if (themeBtn) themeBtn.innerHTML = isLightMode ? '🌙' : '☀️';
    };
});

// ===== SPLASH SCREEN FUNCTIONALITY =====
function initializeSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const loaderProgress = document.querySelector('.loader-progress');
    const loaderPercent = document.querySelector('.loader-percent');
    const loaderStatus = document.querySelector('.loader-status');

    if (!splashScreen) return;

    let progress = 0;
    const maxProgress = 100;
    const minDisplayTime = 2200;
    const startTime = Date.now();

    const loadingSteps = [
        { progress: 20, text: "Checking Systems" },
        { progress: 45, text: "Loading Resources" },
        { progress: 70, text: "Initializing Labs" },
        { progress: 90, text: "Finalizing Setup" },
        { progress: 100, text: "Ready to Launch" }
    ];

    let currentStep = 0;

    function updateProgress() {
        if (currentStep < loadingSteps.length) {
            const step = loadingSteps[currentStep];
            progress = step.progress;

            if (loaderProgress) loaderProgress.style.width = `${progress}%`;
            if (loaderPercent) loaderPercent.textContent = `${progress}%`;
            if (loaderStatus) typeWriterEffect(loaderStatus, step.text);

            currentStep++;

            if (currentStep < loadingSteps.length) {
                setTimeout(updateProgress, 350 + Math.random() * 250);
            } else {
                const elapsedTime = Date.now() - startTime;
                const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
                setTimeout(transitionToMain, remainingTime);
            }
        }
    }

    function typeWriterEffect(element, text) {
        element.textContent = '';
        let i = 0;
        function typeChar() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, 50);
            }
        }
        typeChar();
    }

    function transitionToMain() {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            setTimeout(() => splashScreen.remove(), 1000);
        }, 800);
    }

    splashScreen.addEventListener('click', function(e) {
        if (e.target.closest('.splash-content')) {
            transitionToMain();
        }
    });

    setTimeout(updateProgress, 300);
    setTimeout(() => {
        if (!splashScreen.classList.contains('hidden')) {
            transitionToMain();
        }
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeSplashScreen();
    createStars();

    const session = sessionStorage.getItem(CONFIG.SESSION_KEY); // <--- تم التعديل هنا
    if (session) {
        loadSystemSelection();
        showPage('systemSelection');
    } else {
        showPage('cover');
    }
});








// ===== LAB CATEGORIES + STATUS FUNCTIONALITY =====
// Enhanced Filtering, Search, and Sorting for Lab Systems

// Lab status assignments (simulated dynamic status)
function assignLabStatus(systemId, systemName, systemType) {
    // Simulate different statuses based on system properties
    // In production, this could come from an API
    
    const statuses = ['available', 'high-demand', 'maintenance', 'new'];
    const weights = [0.65, 0.20, 0.05, 0.10]; // 65% available, 20% high demand, 5% maintenance, 10% new
    
    // Deterministic but varied assignment based on system ID
    let hash = 0;
    for (let i = 0; i < systemId.length; i++) {
        hash = ((hash << 5) - hash) + systemId.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    const random = Math.abs(hash % 100) / 100;
    
    let cumulative = 0;
    for (let i = 0; i < statuses.length; i++) {
        cumulative += weights[i];
        if (random < cumulative) {
            return statuses[i];
        }
    }
    return 'available';
}

// Map system type to category
function getSystemCategory(system) {
    const type = system.type || '';
    const name = system.name || '';
    const description = system.description || '';
    const usage = system.usage || '';
    
    if (type.includes('macOS') || name.includes('macOS')) return 'macOS';
    if (type.includes('Windows Server')) return 'Windows Server';
    if (type.includes('Windows')) return 'Windows';
    if (type.includes('Linux')) {
        if (name.includes('Kali') || description.includes('security') || usage.includes('Security')) return 'Security';
        if (name.includes('Red Hat') || name.includes('CentOS')) return 'Cloud';
        return 'Linux';
    }
    if (name.includes('AI') || name.includes('Machine Learning') || usage.includes('TensorFlow')) return 'AI';
    if (name.includes('Cloud') || usage.includes('Docker') || usage.includes('Kubernetes')) return 'Cloud';
    if (name.includes('Database') || usage.includes('MySQL') || usage.includes('PostgreSQL')) return 'Database';
    if (name.includes('Network') || usage.includes('Cisco') || usage.includes('GNS3')) return 'Network';
    if (name.includes('Game') || usage.includes('Unity') || usage.includes('Unreal')) return 'GameDev';
    if (name.includes('Graphics') || name.includes('Design') || usage.includes('Adobe')) return 'Design';
    if (name.includes('Cybersecurity') || name.includes('Kali') || usage.includes('security')) return 'Security';
    
    return type || 'Other';
}

// Enhanced render with categories and statuses
function renderFilteredSystems(systems) {
    const systemsList = document.getElementById('systemsList');
    if (!systemsList) return;
    
    if (systems.length === 0) {
        systemsList.innerHTML = `
            <div class="no-results-message">
                <div class="icon">🔍</div>
                <h4>No Labs Found</h4>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    systemsList.innerHTML = systems.map(system => {
        const status = assignLabStatus(system.id, system.name, system.type);
        const category = getSystemCategory(system);
        
        return `
            <div class="system-card" data-category="${category}" data-status="${status}" data-specs="${system.specs}">
                <span class="system-status-badge ${status}">${status.replace('-', ' ')}</span>
                <div class="icon">${system.icon}</div>
                <h3>${system.name}</h3>
                <span class="system-card-category">${category}</span>
                <p>${system.description}</p>
                
                <div class="specs">
                    <p><strong>Specifications:</strong> <span>${system.specs}</span></p>
                    <p><strong>Usage:</strong> <span>${system.usage}</span></p>
                </div>
                
                <div class="system-actions">
                    <button onclick="connectToSystem('${system.id}')" class="primary-btn">
                        Connect to System
                    </button>
                    <button onclick="downloadRDPFile('${system.id}')" class="secondary-btn">
                        Download RDP File
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Filter by category
function filterByCategory(category) {
    const session = sessionStorage.getItem(CONFIG.SESSION_KEY);
    if (!session) return;
    
    let filteredSystems = LAB_SYSTEMS;
    
    if (category !== 'all') {
        filteredSystems = LAB_SYSTEMS.filter(system => {
            const systemCategory = getSystemCategory(system);
            return systemCategory === category;
        });
    }
    
    // Apply search filter if active
    const searchInput = document.getElementById('labSearchInput');
    if (searchInput && searchInput.value.trim() !== '') {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filteredSystems = filteredSystems.filter(system => 
            system.name.toLowerCase().includes(searchTerm) ||
            system.description.toLowerCase().includes(searchTerm) ||
            system.usage.toLowerCase().includes(searchTerm) ||
            system.type.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    const sortSelect = document.getElementById('sortLabs');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        filteredSystems = sortSystems(filteredSystems, sortValue);
    }
    
    renderFilteredSystems(filteredSystems);
    updateResultsCount(filteredSystems.length);
}

// Sort systems
function sortSystems(systems, sortType) {
    const systemsCopy = [...systems];
    
    switch(sortType) {
        case 'name-asc':
            return systemsCopy.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return systemsCopy.sort((a, b) => b.name.localeCompare(a.name));
        case 'specs-high':
            return systemsCopy.sort((a, b) => {
                const extractRAM = (specs) => {
                    const match = specs.match(/(\d+)\s*GB RAM/);
                    return match ? parseInt(match[1]) : 0;
                };
                return extractRAM(b.specs) - extractRAM(a.specs);
            });
        case 'specs-low':
            return systemsCopy.sort((a, b) => {
                const extractRAM = (specs) => {
                    const match = specs.match(/(\d+)\s*GB RAM/);
                    return match ? parseInt(match[1]) : 0;
                };
                return extractRAM(a.specs) - extractRAM(b.specs);
            });
        default:
            return systemsCopy;
    }
}

// Update results count
function updateResultsCount(count) {
    const showingElement = document.getElementById('showingResults');
    if (showingElement) {
        showingElement.innerHTML = `Showing <strong>${count}</strong> of <strong>${LAB_SYSTEMS.length}</strong> labs`;
    }
}

// Search labs
function searchLabs() {
    const searchInput = document.getElementById('labSearchInput');
    if (!searchInput) return;
    
    const activeCategory = document.querySelector('.category-pill.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';
    
    filterByCategory(category);
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('labSearchInput');
    if (searchInput) {
        searchInput.value = '';
        const activeCategory = document.querySelector('.category-pill.active');
        const category = activeCategory ? activeCategory.dataset.category : 'all';
        filterByCategory(category);
    }
}

// Initialize category filters and event listeners
function initializeLabCategories() {
    // Add status badges and categories to existing systems when page loads
    const systemsList = document.getElementById('systemsList');
    if (systemsList) {
        // Will be populated by loadSystemSelection
    }
    
    // Category pill click handlers
    const categoryPills = document.querySelectorAll('.category-pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', function(e) {
            // Remove active class from all pills
            categoryPills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Search input handler (debounced)
    const searchInput = document.getElementById('labSearchInput');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchLabs();
            }, 300); // Debounce for performance
        });
    }
    
    // Clear search button
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
    
    // Sort select handler
    const sortSelect = document.getElementById('sortLabs');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const activeCategory = document.querySelector('.category-pill.active');
            const category = activeCategory ? activeCategory.dataset.category : 'all';
            filterByCategory(category);
        });
    }
}

// Override loadSystemSelection to include categories
const originalLoadSystemSelection = loadSystemSelection;
window.loadSystemSelection = function() {
    // Call original function first to maintain existing functionality
    originalLoadSystemSelection();
    
    // Then enhance with categories and statuses
    const session = sessionStorage.getItem(CONFIG.SESSION_KEY);
    if (!session) return;
    
    // Re-render with status badges and categories
    filterByCategory('all');
    
    // Initialize event listeners if not already done
    initializeLabCategories();
};

// Ensure categories are initialized when page becomes active
document.addEventListener('DOMContentLoaded', function() {
    // Store original showPage
    const originalShowPage = window.showPage;
    
    // Override showPage to initialize categories when systemSelection is shown
    window.showPage = function(pageId) {
        originalShowPage(pageId);
        
        if (pageId === 'systemSelection') {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                filterByCategory('all');
                initializeLabCategories();
            }, 50);
        }
    };
});

// Export for use in other modules if needed
window.LabCategories = {
    filterByCategory,
    searchLabs,
    clearSearch,
    getSystemCategory,
    assignLabStatus
};