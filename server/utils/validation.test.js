const expect = require('expect');
const {
  isRealString
} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {


    var string = isRealString(98);

    expect(string).toBeFalsy();


  });

  it('should reject string with only spaces', () => {

    var string = isRealString('    ');

    expect(string).toBeFalsy();

  });

  it('should allow string with non space values', () => {


    var string = isRealString('come on');

    expect(typeof string).not.toBe('string');

  });

});