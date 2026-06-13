#!/bin/bash

cd /d C:\Users\igorl\Desktop\projeto-site-pedro

# Remover arquivos desnecessários
git rm --cached -f deploy.mjs push-to-github.js push-to-github.sh push.bat
git rm --cached -f DEPLOYMENT_READY.md DEPLOY_MANUAL_INSTRUCTIONS.md GITHUB_PUSH_INSTRUCTIONS.md QUICK_PUSH.md

# Adicionar todas as mudanças
git add -A

# Fazer commit
git commit -m "refactor: clean up codebase and implement security improvements

- Fix CSS syntax errors (remove duplicate closing braces in Problem, Services, Differentials, Portfolio, Footer)
- Remove unused React import from main.tsx
- Remove empty description property from Portfolio component
- Remove portfolio-description CSS class (unused styling)
- Remove unnecessary deployment and build scripts (deploy.mjs, push-*.js, push.bat)
- Remove redundant documentation files
- Add ErrorBoundary component for error handling
- Create contacts.ts constants file for centralized configuration
- Add Content-Security-Policy headers to netlify.toml for improved security
- Add X-Content-Type-Options, X-Frame-Options, X-XSS-Protection headers

Changes improve:
- Code quality and maintainability
- Security posture with CSP headers
- Error resilience with ErrorBoundary
- Configuration centralization

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

# Push para o repositório remoto
git push origin main
