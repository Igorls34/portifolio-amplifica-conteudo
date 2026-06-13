#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const projectPath = 'C:\\Users\\igorl\\Desktop\\projeto-site-pedro';

try {
  console.log('📤 Pushing changes to GitHub...\n');
  
  process.chdir(projectPath);
  
  // Check status
  console.log('=== Checking Git Status ===');
  const status = execSync('git status --short', { encoding: 'utf-8' });
  console.log(status || 'No changes');
  
  // Add all changes
  console.log('\n=== Adding Changes ===');
  execSync('git add .', { encoding: 'utf-8' });
  console.log('✅ Changes staged');
  
  // Create commit
  console.log('\n=== Creating Commit ===');
  const commitMsg = `feat: Remove portfolio descriptions and enhance aesthetic colors

- Remove descriptions from all 21 portfolio items
- Increase opacity of section background colors for better visibility
- Add z-index to all pseudo-elements for proper layering
- Enhance visual hierarchy across all sections
- Improve overall premium agency aesthetic

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`;
  
  execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { encoding: 'utf-8' });
  console.log('✅ Commit created');
  
  // Push to GitHub
  console.log('\n=== Pushing to GitHub ===');
  execSync('git push origin main', { encoding: 'utf-8' });
  console.log('✅ Changes pushed to GitHub');
  
  console.log('\n✨ All done! Your changes are now on GitHub.');
  console.log('\n📊 Next steps:');
  console.log('1. Check https://github.com/[your-username]/projeto-site-pedro');
  console.log('2. Wait for Netlify deployment (usually 1-2 minutes)');
  console.log('3. Visit your site to see the changes live');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
