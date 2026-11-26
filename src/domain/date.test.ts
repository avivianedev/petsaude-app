import { formatDisplayDate } from './date';

describe('formatDisplayDate', () => {
  it('takes a date as a string and returns it in the format “DD/MM/YYYY"', () => {
    const date = '2026-01-05';
    const result = formatDisplayDate(date);
    expect(result).toBe('05/01/2026');
  });
});
