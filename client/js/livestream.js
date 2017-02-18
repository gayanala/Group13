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
	},
	videoUrl: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});
		
		if(video != undefined) {
			return video.videoUrl;
		}
	},
	live: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});
		
		if(video != undefined) {
			return video.live;
		}
	},
	agentLivestream: function() {
		var video = Videos.findOne({_id: FlowRouter.getParam('id')});
		
		if(video == undefined) {
			var agent = Agents.findOne({_id: FlowRouter.getParam('id')});
			
			if(agent != undefined) {
				return true;
			}
		}
		
		return false;
	}
});

Template.livestream.events({
	'change .uploadInput'(event) {
		event.target.value = '';
	}
});