import { AddDaysPipe } from './add-days.pipe';

describe('AddDaysPipe', () => {
  let pipe: AddDaysPipe;

  beforeEach(() => pipe = new AddDaysPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow('AddDaysPipe: missing required arguments');
    });

    it('should add two days', () => {
      const result: Date = pipe.transform(new Date('1/24/2017'), 2);
      expect(result.getDate()).toBe(26);
    });
  });
});
