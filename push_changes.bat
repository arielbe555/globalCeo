@echo off
cd /d c:\GlobalCeo
echo === Adding all changes ===
git add -A
echo === Committing ===
git commit -m "Magic Kingdom hour-by-hour, badges mas grandes, Paris photo HD, sin Osaka"
echo === Pushing to GitHub ===
git push origin main
echo === Done! ===
pause
