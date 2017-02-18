import { Agents } from '../../collections/agents.js';


Template.corporateAccount.onCreated(function() {
    Meteor.subscribe('Agents');
});

Template.corporateAccount.helpers({
	agents: function() {
		var agentData = [];

		var allAgents = Agents.find({}).fetch();
		for(var i = 0; i < allAgents.length; i++) {
			var agent = allAgents[i];

			agentData.push({
				agentId: agent._id,
				firstName: agent.firstName,
				lastName: agent.lastName,
				email: agent.email,
				phoneNumber: agent.phoneNumber,
				videoLink: agent.videoLink,
				imageUrl: agent.imageUrl,
				available: agent.available,
				waitTime: agent.waitTime
			});
		}
		
		return agentData;
	}
});