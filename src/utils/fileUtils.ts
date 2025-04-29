import fs from 'fs-extra';
import path from 'path';

export async function writeFileRecursive(filePath: string, content: string) {
  await fs.ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, 'utf8');
}
