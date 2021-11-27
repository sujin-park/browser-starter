export const add = (a: number, b: number) => {
  return a + b;
}

it('use calculator', () => {
  expect(add(3, 5)).toBe(8);
})