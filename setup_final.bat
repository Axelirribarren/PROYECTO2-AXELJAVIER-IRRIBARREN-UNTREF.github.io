@echo off
move temp_app\src src
move temp_app\public public
move temp_app\index.html .
move temp_app\package.json .
move temp_app\vite.config.js .
move temp_app\eslint.config.js .
move temp_app\README.md .
move temp_app\.gitignore .
rmdir temp_app
del install.bat
echo Setup Complete
