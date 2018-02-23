Meteor.subscribe('personsallowed');

AutoForm.addHooks('insertPersonForm', {
	onSuccess: function (doc) {
		//console.log("running after hook for CURSIST insert!");
		//return Session.set('successfulCursist', true);
		//Router.go('cursistEdit', {_id: this.docId});
		Router.go('/');
	}
})

/*****************************************************************************/
/* Person: Event Handlers */
/*****************************************************************************/
Template.Person.events({
});

/*****************************************************************************/
/* Person: Helpers */
/*****************************************************************************/
Template.Person.helpers({

});

/*****************************************************************************/
/* Person: Lifecycle Hooks */
/*****************************************************************************/
Template.Person.created = function () {
};

Template.Person.rendered = function () {
};

Template.Person.destroyed = function () {
};