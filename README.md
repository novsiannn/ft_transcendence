# FT_TRANSCENDENCE


ft_transcendence is the final web project of the **42 School** curriculum. It is a **full-stack web application** that implements a **multiplayer Pong game**, user authentication, real-time interactions, and other features. The project is built using **TypeScript, Node.js, WebSockets**, and other modern technologies.

## 🏆 Objectives

- Develop a full-stack web application from scratch.
- Implement **OAuth2 authentication** via 42’s API.
- Create a **real-time multiplayer Pong game** using WebSockets.
- Use **a database (SQLite) to manage users, matches, and statistics**.
- Ensure proper UI/UX design and responsive web design.
- Deploy the project using **Docker**.

## 🚀 Technologies Used

### **Frontend**
- **TypeScript as a base code**
- **Webpack**
- **Tailwind CSS**
- **WebSockets for real-time communication**

### **Backend**
- **OAuth2 authentication via 42 API**
- **JWT for session management**
- **WebSockets for real-time features**

### **DevOps & Deployment**
- **Docker & Docker Compose**

## 📜 Features

✅ **User Authentication**
- Login via **OAuth2 (42 API)**
- **Two-Factor Authentication (2FA)** using OTP

✅ **User Profile & Social Features**
- Profile customization (avatars, usernames)
- Friends list & blocking users
- In-app chat system

✅ **Real-time Pong Game**
- Multiplayer **1v1 Pong game**
- Matchmaking system
- Game history & statistics tracking

✅ **Admin Dashboard**
- Manage users & permissions
- Monitor game statistics

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js (LTS version)
- Docker (optional, for containerized deployment)

### **Clone the Repository**
```
git clone https://github.com/your-username/ft_transcendence.git

cd ft_transcendence
```

## Running the Frontend
Navigate to the frontend folder:

```
cd frontend
```

### Install all dependencies:

```
npm i
```

### Start the frontend:

```
npm start
```

The website will be available at **http://localhost:3000**.

## Running the Backend
### Navigate to the backend folder:

```
cd backend/src
```

### Install all dependencies:

```
npm i
```
### Start the backend:

```
node index.js
```
The backend will be available at **http://localhost:8888**.

## Running with Docker
```
docker-compose up --build
```
