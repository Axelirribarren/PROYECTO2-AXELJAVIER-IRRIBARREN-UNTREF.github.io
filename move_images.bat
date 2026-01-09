@echo off
mkdir public\imagenes
xcopy legacy\imagenes public\imagenes /E /I /Y
echo Images Moved
