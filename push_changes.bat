@echo off
cd /d c:\GlobalCeo
echo.
echo === IMPORTANTE: Antes de correr esto, asegurate que paris.jpg ===
echo === este en la carpeta: c:\GlobalCeo\public\assets\paris.jpg  ===
echo.
echo === Adding all changes ===
git add -A
echo === Committing ===
git commit -m "Fix: hero mas chico, Andi quote mas grande, paris.jpg en gallery"
echo === Pushing to GitHub ===
git push origin main
echo === Done! Check https://github.com/arielbe555/globalCeo ===
pause
