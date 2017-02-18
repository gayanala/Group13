import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';

import { publishAll } from './publish.js';
import { allowAll } from './allow.js';
import { agentsMethods } from './agentsMethods.js'


Meteor.startup(() => {
	allowAll();
	publishAll();
	
	// Bring in agents methods
	agentsMethods();
	
	// Clear the database (for testing)
	Agents.remove({});
	
	// Initialize database (for testing)
	if(Agents.find({}).fetch().length <= 0) { 
		//Agent 1
		Agents.insert({
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@dish.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.link.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});
		
		//Agent 2
		Agents.insert({
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@dish.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.link.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});
		
		//Agent 3
		Agents.insert({
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@dish.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.link.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});
		
		//Agent 4
		Agents.insert({
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@dish.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.link.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});
		
		//Agent 5
		Agents.insert({
			firstName: 'Jerrod',
			lastName: 'Sigmund',
			email: 'jerrod.sigmund@dish.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.link.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 123
		});
		
		//Agent 6
		Agents.insert({
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@dish.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.link.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});
	}
});
