import { SubDaysPipe } from './sub-days.pipe';

describe('SubDaysPipe', () => {
  let pipe: SubDaysPipe;

  beforeEach(() => pipe = new SubDaysPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow('SubtractPipe: missing required arguments');
    });

    it('should subtract two days', () => {
      const result: Date = pipe.transform(new Date('1/24/2017'), 2);
      expect(result.getDate()).toBe(22);
    });
  });
});
