#!/usr/bin/env node
/* eslint-disable no-undef */
import { program } from 'commander';

const genDiff = () => {

  const name = 'gendiff';
  const version = '1.0.0';

  if (process.argv.includes('-h')) {
    console.log(` 
    Usage: ${name} [options]

    Compares two configuration files and shows a difference.

    Options:
    -V, --version        output the version number
    -h, --help           output usage information`)
  } else if (process.argv.includes('-V')) {
    console.log(version)
  }
};

console.log('ну и чо');
genDiff();

export default genDiff;