import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import { installSkill } from '../core/installSkill.js';
import os from 'os';

const tmpDir = path.join(os.tmpdir(), 'wayfinder-test');

describe('installSkill', () => {
    beforeEach(async () => {
        await fs.remove(tmpDir);
        await fs.ensureDir(tmpDir);
        process.chdir(tmpDir);
    });

  afterEach(async () => {
    await fs.emptyDir(tmpDir);
  });

  it('creates skill file in .agents/skills', async () => {
    const target = 'claude';

    const skill = {
      name: 'test-skill',
      fileName: 'test.md',
      contentPath: 'claude/SKILL.md',
    };

    await installSkill(target as any, skill as any);

    const skillPath = path.join(
      process.cwd(),
      '.agents',
      'skills',
      'test.md'
    );

    const exists = await fs.pathExists(skillPath);

    expect(exists).toBe(true);
  });
});