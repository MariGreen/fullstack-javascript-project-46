#!/usr/bin/env node
/* eslint-disable no-undef */
import { program } from 'commander';
import genDiff from '../index.js';


// const genDiff = (filepath1, filepath2, format) => `${filepath1}${filepath2}${format}`

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'json', 'yml')
  .version('1.0.0')
// .arguments('<filepath1> <filepath2>')

// program.command('gendiff')
// .argument('<filepath1>', 'Path to first file')
// .argument('<filepath2>', 'Path to second file')
// .arguments('<filepath1> <filepath2>')
// .option('-f, --format <type>', 'output format', 'json', 'yml')
// .action(((filepath1, filepath2, options) => {
//   // const result = genDiff(first, second, options.format)
//   // console.log(result);
//   console.log('filepath1:', filepath1);
//   console.log('filepath2:', filepath2);
//   console.log('options.format:', options.format);
// }
// ));

program.parse();


//   const name = 'gendiff';
//   const version = '1.0.0';

//   if (process.argv.includes('-h')) {
//     console.log(` 
//     Usage: ${name} [options]

//     Compares two configuration files and shows a difference.

//     Options:
//     -V, --version        output the version number
//     -h, --help           output usage information`)
//   } else if (process.argv.includes('-V')) {
//     console.log(version)
//   }


console.log('ну и чо');
// console.log(genDiff(10, 8));
genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

export default genDiff;