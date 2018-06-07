import { AddYearsPipe } from './add-years.pipe';

describe('AddYearsPipe', () => {
  let pipe: AddYearsPipe;

  beforeEach(() => pipe = new AddYearsPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow('AddYearsPipe: missing required arguments');
    });

    it('should add two years', () => {
      const result: Date = pipe.transform(new Date('1/24/2017'), 2);
      expect(result.getFullYear()).toBe(2019);
    });
  });
});
