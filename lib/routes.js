var main = 'main';

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'corporate-account'});
	}
});

FlowRouter.route('/test', {
	name: 'test',
	action: function() {
		BlazeLayout.render(main, {content: 'test'});
	}
});