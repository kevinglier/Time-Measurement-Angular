import {TmTimeTableDurationPipe} from './tm-time-table-duration.pipe';

describe('TmTimeTableDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new TmTimeTableDurationPipe();
    expect(pipe).toBeTruthy();
  });
  describe('Time format tests', () => {
    it('should format in format 3s', () => {
      const pipe = new TmTimeTableDurationPipe();
      const pipedValue = pipe.transform(3);
      expect(pipedValue).toBe('3s');
    });
    it('should format in format 14m3s', () => {
      const pipe = new TmTimeTableDurationPipe();
      const pipedValue = pipe.transform(3 + (60 * 14));
      expect(pipedValue).toBe('14m3s');
    });
    it('should format in format 1h14m3s', () => {
      const pipe = new TmTimeTableDurationPipe();
      const pipedValue = pipe.transform(3 + (60 * 14) + (60 * 60 * 1));
      expect(pipedValue).toBe('1h14m3s');
    });
  });
});
