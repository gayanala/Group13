import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';

export function agentsMethods() {
	Meteor.methods({
		'createAgent':function(firstName, lastName, email, phoneNumber, videoLink, imageUrl, available, waitTime) {
			var agentObject = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				phoneNumber: phoneNumber,
				videoLink: videoLink,
				imageUrl: imageUrl,
				available: available,
				waitTime: waitTime
			}
			
			Agents.insert(agentObject);
		},
		'removeAgent':function(agentId) {
			Agents.remove(agentId);
		}, 
		'updateAgent':function(agentId, firstName, lastName, email, phoneNumber, videoLink, imageUrl, available, waitTime) {
			Agents.update({_id: agentId}, {
				$set: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					phoneNumber: phoneNumber,
					videoLink: videoLink,
					imageUrl: imageUrl,
					available: available,
					waitTime: waitTime
				}
			});
		}
	});
}