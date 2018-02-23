// search related stuff

import { Index, MinimongoEngine } from 'meteor/easy:search';

PersonsIndex = new Index({
  collection: Persons,
  fields: ['name', 'firstname'],
  engine: new MinimongoEngine(),
  name: 'PersonsIndex'
});

IndicatorIndex = new Index({
  collection: Persons,
  fields: ['indicator.type', 'indicator.content'],
  engine: new MinimongoEngine(),
  name: 'IndicatorIndex'
});
