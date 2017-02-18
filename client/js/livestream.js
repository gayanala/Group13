import { Agents } from '../../collections/agents.js';
import { Videos } from '../../collections/videos.js';

Template.livestream.onCreated(function() {
    Meteor.subscribe('Agents');
	Meteor.subscribe('Videos');
});

Template.livestream.helpers({
	videoName: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});
		
		if(video != undefined) {
			return video.videoName;
		}
	}
});