Router.configure({
	layoutTemplate:'MasterLayout',
	loadingTemplate:'Loading',
	notFoundTemplate:'NotFound'
});

Router.route('/', {
	name: 'personsList',
	controller:'HomeController',
	action: 'action',
	where: 'client'
});

Router.route('/persons/:_id', {
	name:'personSingle',
	data: function() { return Persons.findOne(this.params._id); },
	//waitOn: function() { return Meteor.subscribe('personsallowed'); }
});

Router.route('/persons/:_id/edit', {
	name: 'personEdit',
	data: function () { return Persons.findOne(this.params._id); }
});

Router.route('/submit', {
	name: 'Person',
	controller:'PersonController',
	action: 'action',
	where: 'client'
});

Router.route('/indicator', {
	name: 'indicatorSearch'
});
