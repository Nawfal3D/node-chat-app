const expect = require('expect');
const {
  generateMessage,
  generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'John';
    var text = 'come on';

    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from: 'John',
      text: 'come on'
    });

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {

    https: //www.google.com/maps?q=1,1

      var from = 'deb';
    var latitude = 1;
    var longitude = 1;

    var url = `https://www.google.com/maps?q=1,1`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      url
    });

  });
});