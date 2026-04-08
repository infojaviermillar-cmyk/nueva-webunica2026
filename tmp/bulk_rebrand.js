
import fs from 'fs';
import path from 'path';

const folder = 'c:/Users/studioo/Desktop/000000000000000000_WEBUNICA-PLATAFORMA/src/app/(public)';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

walk(folder, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Domain
    content = content.replace(/solocasaschile\.com/g, 'webunica.cl');
    content = content.replace(/solocasaschile\.cl/g, 'webunica.cl');
    
    // Name
    content = content.replace(/SoloCasasChile/g, 'Webunica Chile');
    content = content.replace(/SolocasasChile/g, 'Webunica Chile');
    
    // Emails
    content = content.replace(/contacto@webunica\.cl/g, 'contacto@webunica.cl'); // already correct
    content = content.replace(/solicitud@webunica\.cl/g, 'contacto@webunica.cl');
    
    if (content !== original) {
      console.log(`Updated ${filePath}`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
