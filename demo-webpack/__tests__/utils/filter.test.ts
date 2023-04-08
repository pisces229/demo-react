import util from '@/utils/filter';

test('integer 1', () => {
  expect(util.integer('abc')).toBe('');
});
test('integer 2', () => {
  expect(util.integer('123')).toBe('123');
});
test('integer 3', () => {
  expect(util.integer('123a')).toBe('123');
});
