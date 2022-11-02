import calculate from '../logic/calculate';

describe('Make calculations', () => {
  const equal = '=';

  it('Adding test', () => {
    const display = {
      total: '150',
      next: '15',
      operation: '+',
    };
    const sumDisp = calculate(display, equal);
    expect(sumDisp.total).toBe('165');
  });

  it('Multiplying test', () => {
    const display = {
      total: '5',
      next: '5',
      operation: 'x',
    };
    const multiDisp = calculate(display, equal);
    expect(multiDisp.total).toBe('25');
  });
});
