import genDiff from '../index.js';

test('test genDiff',
  () => {
    expect(genDiff(15, 7)).toBe(8);
  }
)