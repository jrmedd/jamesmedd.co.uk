import { unlink, access } from 'fs/promises';
import { constants } from 'fs';

async function cleanup() {
  const filesToRemove = [
    'static-career.html',
    'generate-pdf.js',
    'james-medd-career.pdf',
    'README-static-career.md',
    'pdf-package.json',
    'package-pdf.json'
  ];

  console.log('Starting cleanup...');

  for (const file of filesToRemove) {
    try {
      await access(file, constants.F_OK);
      await unlink(file);
      console.log(`✓ Removed ${file}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`- ${file} not found (already removed)`);
      } else {
        console.log(`✗ Error removing ${file}: ${error.message}`);
      }
    }
  }

  console.log('Cleanup complete!');
}

cleanup().catch(console.error);
