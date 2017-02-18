import { Agents } from '../../collections/agents.js';
import { Videos } from '../../collections/videos.js';

Template.corporateAccount.onCreated(function() {
    Meteor.subscribe('Agents');
	Meteor.subscribe('Videos');
});

Template.corporateAccount.helpers({
	agents: function() {
		return Agents.find({}).fetch();
	},
	liveVideos: function() {
		var liveVideosData = [];
		
		var allVideos = Videos.find({}).fetch();		
		for(var i = 0; i < allVideos.length; i++) {
			var video = allVideos[i];
									
			if(video.live) {
				liveVideosData.push(video);
			}
		}
		
		return liveVideosData;
	},
	nonLiveVideos: function() {
		var nonLiveVideosData = [];
		
		var allVideos = Videos.find({}).fetch();
		for(var i = 0; i < allVideos.length; i++) {
			var video = allVideos[i];
			
			if(!video.live) {
				nonLiveVideosData.push(video);
			}
		}
		
		return nonLiveVideosData;
	}
});

Template.corporateAccount.events({
	'click .clickable-video'(event) {
		event.preventDefault();
		FlowRouter.go("/livestream/" + event.target.id);
		scroll(0, 0); // Will scroll it to the top of page
	}
});