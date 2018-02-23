Meteor.subscribe('personsallowed');

Template.personsList.helpers ({
	persons: function() {
		return Persons.find();	
		
	}
});