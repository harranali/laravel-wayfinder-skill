#!/usr/bin/env node

import { cac } from 'cac';
import { install } from '../src/cli/install.js';

const cli = cac('laravel-wayfinder-skill');

cli
  .command('install <target>', 'Install Wayfinder skill for ai tool')
  .action(async (target: string) => {
    try {
      await install(target);
    } catch (error) {
      console.error('❌ Installation failed');
      console.error(error);
      process.exit(1);
    }
  });

cli.help();
cli.parse();