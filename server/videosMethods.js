import { Meteor } from 'meteor/meteor';

import { Videos } from '../collections/videos.js';

export function videosMethods() {
	Meteor.methods({
		'createVideo':function(videoName, live, datePublished, imageUrl, agent) {
			var videoObject = {
				videoName: videoName,
				live: live,
				datePublished: datePublished,
				imageUrl: imageUrl,
				agent: agent
			}
			
			Videos.insert(videoObject);
		},
		'removeVideo':function(videoId) {
			Videos.remove(videoId);
		}, 
		'updateVideo':function(videoId, videoName, live, datePublished, imageUrl, agent) {
			Videos.update({_id: videoId}, {
				$set: {
					videoName: videoName,
					live: live,
					datePublished: datePublished,
					imageUrl: imageUrl,
					agent: agent
				}
			});
		}
	});
}