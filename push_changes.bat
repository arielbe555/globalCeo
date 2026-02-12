@echo off
cd /d c:\GlobalCeo
echo === Adding all changes ===
git add -A
echo === Committing ===
git commit -m "Fix: Paris photo daisyparis.jpg, quitar Hulk y Joy del hero, badges mas visibles"
echo === Pushing to GitHub ===
git push origin main
echo === Done! Check https://github.com/arielbe555/globalCeo ===
pause
