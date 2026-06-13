#!/usr/bin/env node

import { execSync } from 'child_process';
import { chdir } from 'process';

const projectPath = 'C:\\Users\\igorl\\Desktop\\projeto-site-pedro';

try {
  chdir(projectPath);
  
  console.log('📤 Pushing to GitHub...\n');
  
  // Stage all changes
  console.log('1️⃣ Staging changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Create commit
  console.log('\n2️⃣ Creating commit...');
  execSync('git commit -m "feat: Remove portfolio descriptions and enhance aesthetic colors\n\n- Remove descriptions from all 21 portfolio items\n- Increase opacity of section background colors for better visibility\n- Add z-index to all pseudo-elements for proper layering\n- Enhance visual hierarchy across all sections\n- Improve overall premium agency aesthetic\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"', { stdio: 'inherit' });
  
  // Push to GitHub
  console.log('\n3️⃣ Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('\n✅ ✨ Successfully pushed to GitHub!');
  console.log('\n📊 Next:');
  console.log('  • Netlify will auto-deploy (1-2 minutes)');
  console.log('  • Site updates at: https://amplifica-conteudo.netlify.app');
  console.log('  • Check commits: https://github.com/[username]/projeto-site-pedro');
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}
