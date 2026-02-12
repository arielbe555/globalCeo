@echo off
cd /d c:\GlobalCeo
echo === Adding all changes ===
git add -A
echo === Committing ===
git commit -m "Fix: Paris=paris.jpg, badges mas abajo, Andi mas grande, IATA logo restored"
echo === Pushing to GitHub ===
git push origin main
echo === Done! Check https://github.com/arielbe555/globalCeo ===
pause
