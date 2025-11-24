@echo off
echo ==========================================
echo      Portfolio Project Setup & Run
echo ==========================================

echo.
echo [1/4] Checking Server Dependencies...
cd server
if not exist node_modules (
    echo Installing Server Dependencies...
    call npm install
) else (
    echo Server dependencies found.
)

echo.
echo [2/4] Checking Client Dependencies...
cd ../client
if not exist node_modules (
    echo Installing Client Dependencies...
    call npm install
) else (
    echo Client dependencies found.
)

echo.
echo [3/4] Starting Backend Server...
cd ../server
start "Portfolio Backend" cmd /k "npm start"

echo.
echo [4/4] Starting Frontend Client...
cd ../client
start "Portfolio Frontend" cmd /k "npm run dev"

echo.
echo ==========================================
echo Project is launching!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo You can close this window if you want, 
echo but keep the other two windows open.
echo ==========================================
pause
