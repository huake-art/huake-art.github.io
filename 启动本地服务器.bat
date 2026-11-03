@echo off
chcp 65001 >nul
cd /d "%~dp0"
set PORT=8080
title 四级备考站 - 本地服务器

echo.
echo ============================================
echo   四级备考站 · 本地服务器
echo ============================================
echo   电脑访问：http://127.0.0.1:%PORT%/
echo   手机访问：http://本机IPv4:%PORT%/  （同一 Wi-Fi）
echo            用 ipconfig 查本机 IPv4 地址
echo.
echo   提示：手机浏览器直接访问局域网地址只能预览，
echo   不能离线安装（PWA 安装要求 https://）。
echo   要装到手机请把本站部署到 HTTPS 静态托管，
echo   见 README-mobile.md。
echo ============================================
echo.

where py >nul 2>nul
if %errorlevel%==0 goto runpy
where python >nul 2>nul
if %errorlevel%==0 goto runpython

echo.
echo 没有找到 Python。
echo 你仍然可以直接双击 index.html，用 Edge / Chrome 打开本站。
echo 如果坚持要用本地服务器，请先安装 Python：https://www.python.org/downloads/
echo.
pause
exit /b 1

:runpy
start "" http://127.0.0.1:%PORT%/
py -m http.server %PORT%
goto :eof

:runpython
start "" http://127.0.0.1:%PORT%/
python -m http.server %PORT%
goto :eof
