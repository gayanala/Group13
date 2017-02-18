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
			
			console.log(video.live);
			
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