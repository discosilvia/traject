import { Index, MinimongoEngine } from 'meteor/easy:search';
// On Client and Server

PersonsIndex = new Index({
  collection: Persons,
  fields: ['name', 'firstname'],
  engine: new MinimongoEngine(),
});