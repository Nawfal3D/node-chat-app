const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
var users;
  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id:'1',
      name:'Mike',
      room:'Node Course'
    },{
      id:'2',
      name:'Raid',
      room:'React Course'
    },{
      id:'3',
      name:'Aboo',
      room:'Node Course'
    }]
  });

it('should add new user', () => {
  var users = new Users();
  var user = {
    id:'123',
    name:'nawfal',
    room:'Anywhere'
  };

  var resUser = users.addUser(user.id, user.name, user.room);

  expect(users.users).toEqual([user]);
});

it('should retun names in a room', () => {
  var userList = users.getUserList('Node Course');

  expect(userList).toEqual(['Mike', 'Aboo']);
});


it('should remove a user', () => {
  var user = users.removeUser('1');

  expect(user.id).toEqual('1');
  expect(users.users.length).toBe(2);
});

it('should not remove user', () => {
  var user = users.removeUser('0');

  expect(user).toBeUndefined();
  expect(users.users.length).toBe(3);
});


it('should find user', () => {
  var Finduser = users.getUser('1');
  expect(Finduser.id).toEqual('1');
});

it('should not find user', () => {
  var Finduser = users.getUser('0');

  expect(Finduser).toBeUndefined();
});

});
