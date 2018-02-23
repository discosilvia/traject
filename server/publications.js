Meteor.publish('personsallowed', function() {
	return Persons.find();
});