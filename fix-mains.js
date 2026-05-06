const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        walk(path.join(dir, file), fileList);
      }
    } else if (file === 'page.tsx') {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const pages = walk(path.join(__dirname, 'app'));
let changedFiles = 0;

for (const page of pages) {
  let content = fs.readFileSync(page, 'utf8');
  if (content.includes('<main') && content.includes('</main>')) {
    // Replace <main ...> with <div ...> and </main> with </div>
    // Note: only replacing the first instance or all instances if multiple exist.
    const newContent = content.replace(/<main([^>]*)>/g, '<div$1>').replace(/<\/main>/g, '</div>');
    if (newContent !== content) {
      fs.writeFileSync(page, newContent, 'utf8');
      changedFiles++;
    }
  }
}

console.log(`Replaced <main> with <div> in ${changedFiles} page.tsx files.`);
