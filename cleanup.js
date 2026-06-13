#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = 'C:\\Users\\igorl\\Desktop\\projeto-site-pedro';

try {
  process.chdir(projectDir);
  
  console.log('🗑️  Removendo arquivos desnecessários...\n');

  const filesToDelete = [
    'deploy.mjs',
    'push-to-github.js',
    'push-to-github.sh',
    'push.bat',
    'DEPLOYMENT_READY.md',
    'DEPLOY_MANUAL_INSTRUCTIONS.md',
    'GITHUB_PUSH_INSTRUCTIONS.md',
    'QUICK_PUSH.md'
  ];

  filesToDelete.forEach(file => {
    const filePath = path.join(projectDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✓ Deletado: ${file}`);
    }
  });

  console.log('\n📊 Status git...');
  const status = execSync('git status --short', { encoding: 'utf-8' });
  console.log(status || 'Nenhuma mudança');

  console.log('\n📝 Adicionando mudanças ao git...');
  execSync('git add -A', { encoding: 'utf-8' });
  console.log('✅ Mudanças staged');

  console.log('\n💾 Fazendo commit...');
  const commitMessage = `refactor: clean up codebase and implement security improvements

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

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`;

  execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { encoding: 'utf-8' });
  console.log('✅ Commit criado');

  console.log('\n🚀 Push para GitHub...');
  execSync('git push origin main', { encoding: 'utf-8' });
  console.log('✅ Mudanças enviadas para GitHub');

  console.log('\n✨ Tudo pronto! Seu código foi melhorado e enviado.');
  console.log('\n📊 Próximas etapas:');
  console.log('1. Verifique a implantação automática no Netlify');
  console.log('2. Aguarde 1-2 minutos para atualização');
  console.log('3. Visite seu site para ver as mudanças ativas');

} catch (error) {
  console.error('❌ Erro:', error.message);
  process.exit(1);
}

