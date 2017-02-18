var main = 'main';

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'corporateAccount'});
	}
});

FlowRouter.route('/livestream/:id', {
	name: 'livestream',
	action: function() {
		BlazeLayout.render(main, {content: 'livestream'});
	}
});
