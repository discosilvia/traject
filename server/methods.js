/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	'submitPerson': function (person, modifier, docId) {
		check(person, {
			firstname: String,
			name: String
		});
		check (modifier, Match.any);
		check (docId, Match.any);
		Persons.insert(person);
	}
});