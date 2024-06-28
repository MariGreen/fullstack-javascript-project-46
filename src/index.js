import path from 'path';
import fs from 'fs';
import parse from '../src/parse.js';

// const genDiff = (filepath1, filepath2, format) => `${filepath1}${filepath2}${format}`

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath))

const genDiff = (filepath1, filepath2) => {
  const fullPathToFile1 = getFullPath(filepath1);
  const fullPathToFile2 = getFullPath(filepath2);

  const data1 = getFullPath(filepath1);
  const data2 = getFullPath(filepath2);

  // console.log(JSON.parse(fs.readFileSync(fullPathToFile1, 'utf-8')));

  console.log(parse(fs.readFileSync(fullPathToFile2, ('utf-8')), extractFormat(filepath2)));

}
//console.log('I am working');
// const genDiff = (a, b) => {
//   console.log('A - B =');
//   return a - b;
// }

export default genDiff;