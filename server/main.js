import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';
import { Videos } from '../collections/videos.js';

import { publishAll } from './publish.js';
import { allowAll } from './allow.js';
import { agentsMethods } from './agentsMethods.js'
import { videosMethods } from './videosMethods.js';


Meteor.startup(() => {
	// Set up publish model
	allowAll();
	publishAll();
	
	// Bring in agents methods
	agentsMethods();
	videosMethods();
	
	// Clear the databases (for testing)
	Videos.remove({});
	Agents.remove({});
	
	// Initialize the Agents database (for testing)
	if(Agents.find({}).fetch().length <= 0) { 
		//Agent 1
		Agents.insert({
			companyId: 0,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@csgi.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});
		
		//Agent 2
		Agents.insert({
			companyId: 0,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@csgi.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});
		
		//Agent 3
		Agents.insert({
			companyId: 0,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@csgi.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});
		
		//Agent 4
		Agents.insert({
			companyId: 0,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@csgi.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});
		
		//Agent 5
		Agents.insert({
			companyId: 0,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@csgi.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});
		
		//Agent 6
		Agents.insert({
			companyId: 0,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});
	}
	
	// Initialize the Videos database (for testing)
	if(Videos.find({}).fetch().length <= 0) {
		// Video 1
		Videos.insert({
			companyId: 0,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-3.jpg',
			videoUrl: 'https://www.youtube.com/embed/pcZWgvMJ7xg',
			agent: Agents.find({}).fetch()[0]
		});
		
		// Video 2
		Videos.insert({
			companyId: 0,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault.jpg',
			videoUrl: 'https://www.youtube.com/embed/2uyQ9WG0BIY',
			agent: Agents.find({}).fetch()[1]
		});
		
		// Video 3
		Videos.insert({
			companyId: 0,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-4.jpg',
			videoUrl: 'https://www.youtube.com/embed/GJpZ0aPQiQ0',
			agent: Agents.find({}).fetch()[2]
		});
		
		// Video 4
		Videos.insert({
			companyId: 0,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-2.jpg',
			videoUrl: 'https://www.youtube.com/embed/kMAKbE_db3A',
			agent: Agents.find({}).fetch()[3]
		});
	}

	Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});	
});


