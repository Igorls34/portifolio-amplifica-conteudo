@echo off
cd /d C:\Users\igorl\Desktop\projeto-site-pedro

echo Removendo arquivos desnecessarios...
del /q deploy.mjs 2>nul
del /q push-to-github.js 2>nul
del /q push-to-github.sh 2>nul
del /q push.bat 2>nul
del /q DEPLOYMENT_READY.md 2>nul
del /q DEPLOY_MANUAL_INSTRUCTIONS.md 2>nul
del /q GITHUB_PUSH_INSTRUCTIONS.md 2>nul
del /q QUICK_PUSH.md 2>nul

echo.
echo Adicionando mudancas ao git...
git add -A

echo.
echo Fazendo commit...
git commit -m "refactor: clean up codebase and implement security improvements

- Fix CSS syntax errors (remove duplicate closing braces in Problem, Services, Differentials, Portfolio, Footer)
- Remove unused React import from main.tsx  
- Remove empty description property from Portfolio component
- Remove portfolio-description CSS class (unused styling)
- Remove unnecessary deployment and build scripts
- Remove redundant documentation files
- Add ErrorBoundary component for error handling
- Create contacts.ts constants file for centralized configuration
- Add Content-Security-Policy headers to netlify.toml for improved security
- Add X-Content-Type-Options, X-Frame-Options, X-XSS-Protection headers

Co-authored-by: Copilot"

echo.
echo Push para GitHub...
git push origin main

echo.
echo Limpeza concluida!
pause
