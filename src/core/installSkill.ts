import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import type { AgentTarget, Skill } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function installSkill(
    target: AgentTarget,
    skill: Skill,
    options?: { projectRoot?: string }
  ) {
    const projectRoot = options?.projectRoot ?? process.cwd();
    
  // 1. skill storage path (always same)
  const skillDir = path.join(projectRoot, '.agents', 'skills');
  const skillFile = path.join(skillDir, skill.fileName);

  // 2. ensure directory
  await fs.ensureDir(skillDir);

  // 3. load template
  const templatePath = path.join(
    __dirname,
    '..',
    'templates',
    skill.contentPath
  );

  const content = await fs.readFile(templatePath, 'utf-8');

  // 4. write skill (safe overwrite or later upgrade to merge)
  await fs.writeFile(skillFile, content);

  // 5. ensure AGENTS.md exists
    const agentsFile = path.join(projectRoot, 'AGENTS.md');

    const skillPointerBlock = `
  ## AI Skills
  Load skills from .agents/skills/
  `;
  
    // 1. create if missing
    if (!(await fs.pathExists(agentsFile))) {
      await fs.writeFile(
        agentsFile,
        `# Agent Instructions\n${skillPointerBlock}\n`
      );
    } else {
      const existing = await fs.readFile(agentsFile, 'utf-8');
  
      // 2. STRICT guard (prevents duplication)
      const alreadyHasPointer = existing.includes(
        'Load skills from .agents/skills/'
      );
  
      if (!alreadyHasPointer) {
        await fs.appendFile(agentsFile, `\n${skillPointerBlock}\n`);
      }
    }

  console.log(`✅ Installed ${skill.name} for ${target}`);
}