import { AddMonthsPipe } from './add-months.pipe';

describe('AddMonthsPipe', () => {
  let pipe: AddMonthsPipe;

  beforeEach(() => pipe = new AddMonthsPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow('AddMonthsPipe: missing required arguments');
    });

    it('should add two months', () => {
      const result: Date = pipe.transform(new Date('1/24/2017'), 2);
      expect(result.getMonth()).toBe(2);
    });
  });
});
