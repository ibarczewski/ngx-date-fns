import { SubMonthsPipe } from './sub-months.pipe';

describe('SubMonthsPipe', () => {
  let pipe: SubMonthsPipe;

  beforeEach(() => pipe = new SubMonthsPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow('SubMonthsPipe: missing required arguments');
    });

    it('should subtract two months', () => {
      const result: Date = pipe.transform(new Date(2015, 1, 1), 5);
      expect(result.getMonth()).toBe(8);
    });
  });
});
