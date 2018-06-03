import { SubYearsPipe } from './sub-years.pipe';

describe('SubYearsPipe', () => {
  let pipe: SubYearsPipe;

  beforeEach(() => pipe = new SubYearsPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow('SubYearsPipe: missing required arguments');
    });

    it('should subtract five years', () => {
      const result: Date = pipe.transform(new Date(2015, 1, 1), 5);
      expect(result.getFullYear()).toBe(2010);
    });
  });
});
