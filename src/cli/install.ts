import { installSkill } from '../core/installSkill.js';
import { skills } from '../core/skills.js';

export async function install(target: string) {
  switch (target) {
    case 'claude':
    case 'windsurf':
    case 'cursor':
    case 'antigravity':
    case 'trae':
    case 'gemini':
      return installSkill(target, skills.laravelWayfinder);

    default:
      throw new Error(`Unsupported target: ${target}`);
  }
}