var main = 'main';

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'corporateAccount'});
	}
});
