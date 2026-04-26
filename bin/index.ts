#!/usr/bin/env node

import { cac } from 'cac';

const cli = cac('laravel-wayfinder-skill');

cli
  .command('install <target>', 'Install Wayfinder skill')
  .action((target) => {
    console.log(`Installing for ${target}...`);
  });

cli.help();
cli.parse();