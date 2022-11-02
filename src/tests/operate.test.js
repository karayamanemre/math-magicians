import operate from '../logic/operate';

describe('make operations', () => {
  test('adding 2 to 2', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
});
