Meteor.subscribe('personsallowed');

AutoForm.addHooks('updatePersonsForm', {
	onSuccess: function (doc) {
		//console.log("running after hook for CURSIST insert!");
		//return Session.set('successfulCursist', true);
		//Router.go('cursistEdit', {_id: this.docId});
		Router.go('/');
	}
})