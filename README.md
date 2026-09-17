# University Virtual Lab & Network Infrastructure System

## 🚀 About the Project
This project is a comprehensive **University Virtual Lab & Network Infrastructure System** developed as a graduation project. It implements a secure, containerized microservices and multi-tier network architecture using modern DevOps and system administration tools.

## 🛠️ Architecture & Tech Stack
* **Containerization & Orchestration:** Docker, Docker Networks, Dockerfiles.
* **Web Server & Reverse Proxy:** Nginx (configured with SSL/TLS termination).
* **Backend:** Node.js, Express.js (secured with HTTPS).
* **Database:** MySQL Server (isolated within dedicated internal Docker networks).
* **Infrastructure & Automation:** Bash scripting, Linux (RHEL/Ubuntu), Custom SSL Certificate generation, automated container deployment pipelines.

## 📂 Project Structure
```text
Graduation-Project-University-Virtual-Lab-System/
├── 1 database/       # MySQL schema, initialization, and setup scripts
├── 2 backend/        # Node.js application, Dockerfile, and SSL certificates scripts
├── 3 frontend/       # Nginx frontend assets and configuration files
└── .gitignore        # Excluded sensitive files (certs, env, logs)
