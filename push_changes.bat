@echo off
cd /d c:\GlobalCeo
echo === Adding all changes ===
git add -A
echo === Committing ===
git commit -m "Fix: logos IATAN mas grandes, footer y authority strip, Paris daisyparis"
echo === Pushing to GitHub ===
git push origin main
echo === Done! Check https://github.com/arielbe555/globalCeo ===
pause
