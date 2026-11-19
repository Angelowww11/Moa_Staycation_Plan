import { copyFile, cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

// GitHub Pages may serve the branch root or the Pages artifact.
// Keep both entry points on the same production build.
await copyFile(join('dist', 'app.html'), join('dist', 'index.html'));
await copyFile(join('dist', 'index.html'), 'index.html');
await mkdir('assets', { recursive: true });
await cp(join('dist', 'assets'), 'assets', { recursive: true, force: true });
await copyFile(join('dist', 'photo-credits.html'), 'photo-credits.html');
