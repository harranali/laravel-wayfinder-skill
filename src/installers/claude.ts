import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function installClaude() {
  const projectRoot = process.cwd();

  const targetDir = path.join(projectRoot, '.claude');
  const targetFile = path.join(targetDir, 'SKILL.md');

  const templatePath = path.resolve(
    __dirname,
    '../templates/claude/SKILL.md'
  );

  // ensure folder
  await fs.ensureDir(targetDir);

  // prevent overwrite (important UX)
  if (await fs.pathExists(targetFile)) {
    console.log('SKILL.md already exists. Skipping.');
    return;
  }

  // copy file
  await fs.copy(templatePath, targetFile);

  console.log('✅ Claude skill installed at .claude/SKILL.md');
}
