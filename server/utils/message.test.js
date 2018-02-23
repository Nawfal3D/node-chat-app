const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', ()=>{
it('should generate correct message object', ()=>{
var from = 'John';
var text = 'come on';

var message =  generateMessage(from,text);

expect(typeof message.createdAt).toBe('number');
expect(message).toMatchObject({from: 'John', text: 'come on'});

});
});