Persons = new Mongo.Collection('persons');

import SimpleSchema from 'simpl-schema';

// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);


var Schemas = {}; 

Schemas.Person = new SimpleSchema({
  firstname: {
    type: String,
    label: 'Voornaam',
    max: 200
  },

  name: {
    type: String,
    label: 'Naam',
    max: 200
  },

  interaction: {
    type: Array,
    optional: true,
    required: false
  },
  'interaction.$': {
    type: Object
  },
  'interaction.$.type': {
    type: String,
    label: 'Soort',
    max: 200
  },
   'interaction.$.partner': {
    type: String,
    label: 'Partner',
    max: 200,
    optional: true
  },
   'interaction.$.date': {
    type: Date,
    label: 'Datum',
    optional: true
  },
  'interaction.$.content': {
    type: String,
    label: 'Info',
    optional: true,
    autoform: {
      type: 'textarea',
      rows: 6
    }
  },
  'interaction.$.ok': {
    type: Boolean,
    label: 'OK?',
    defaultValue: false,
    optional: true
  },
  indicator: {
    type: Array,
    optional: true,
    required: false
  },
  'indicator.$': {
    type: Object
  },
  'indicator.$.type': {
    type: String,
    label: 'indicator',
    optional: true
  },
   'indicator.$.date': {
    type: Date,
    label: 'Datum',
    optional: true
  },
   'indicator.$.content': {
    type: String,
    label: 'Info',
    optional: true
  },
  author: {
    type: String,
    label: 'Auteur',
    autoValue: function() {
      return this.userId
    }
  },
  createdAt: {
    type: Date,
    label: 'Aangemaakt op',
    autoValue: function() {
      return new Date()
      }
  },
  status: {
    type: String,
    label: 'Status',
    optional: true
    
  }

});

Persons.attachSchema(Schemas.Person);

Persons.allow({
  insert: function (userId, doc) { 
    return !!userId;
     },
  update: function (userId, doc, fields, modifier) { 
    return !!userId;
     },

  remove: function (userId, doc) { 
    return !!userId;
     }
});