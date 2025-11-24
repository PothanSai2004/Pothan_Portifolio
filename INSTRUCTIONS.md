# Portfolio Portal - Local Setup Guide

This guide provides step-by-step instructions to run the portfolio portal locally on your machine.

## Project Overview

*   **Frontend:** React.js (built with Vite) - Located in `client/`
*   **Backend:** Node.js & Express - Located in `server/`
*   **Database:** JSON File Storage - Located in `server/data/` (No database installation required)

## Prerequisites

*   **Node.js:** Ensure Node.js is installed. You can check by running `node -v` in your terminal.

## Step-by-Step Setup

### 1. Install Dependencies

You need to install dependencies for both the client (frontend) and server (backend).

**Open your terminal and run:**

```bash
# 1. Install Server Dependencies
cd server
npm install

# 2. Install Client Dependencies
cd ../client
npm install
```

### 2. Start the Application

You need to run the backend and frontend simultaneously. It is best to use **two separate terminal windows**.

**Terminal 1: Start the Backend Server**

```bash
cd server
npm start
```
*The server will start on `http://localhost:5000`.*

**Terminal 2: Start the Frontend Client**

```bash
cd client
npm run dev
```
*The client will start on `http://localhost:5173` (or similar).*

## Troubleshooting

*   **Blank Page?** If you see a blank page, check the browser console (F12) for errors. Ensure the backend server is running.
*   **Port Conflicts:** If port 5000 or 5173 is busy, the terminals will suggest a different port.
