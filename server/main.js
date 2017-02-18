import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';
import { Videos } from '../collections/videos.js';
import { Companies } from '../collections/companies.js';

import { publishAll } from './publish.js';
import { allowAll } from './allow.js';
import { agentsMethods } from './agentsMethods.js'
import { videosMethods } from './videosMethods.js';
import { companiesMethods } from './companiesMethods.js';


Meteor.startup(() => {
	// Set up publish model
	allowAll();
	publishAll();

	// Bring in agents methods
	agentsMethods();
	videosMethods();
	companiesMethods();

	// Clear the databases (for testing)
	Videos.remove({});
	Agents.remove({});
	Companies.remove({});

	// Initialize the Companies database (for testing)
	if(Companies.find({}).fetch().length <= 0) {
		//Company 1
		Companies.insert({
			companyName: 'CSG International',
			shortName: 'CSGi',
			className: 'csg'
		});
		//Company 2
		Companies.insert({
			companyName: 'Penske',
			shortName: 'Penske',
			className: 'penske'
		});

		//Company 3
		Companies.insert({
			companyName: 'Comcast',
			shortName: 'Comcast',
			className: 'comcast'
		});

		//Company 4
		Companies.insert({
			companyName: 'Dish Network',
			shortName: 'Dish',
			className: 'dish'
		});

		//Company 5
		Companies.insert({
			companyName: 'Cox Communications',
			shortName: 'Cox',
			className: 'cox'
		});

		//Company 6
		Companies.insert({
			companyName: 'Charter Communications',
			shortName: 'Charter',
			className: 'charter'
		});

		//Company 7
		Companies.insert({
			companyName: 'Verizon Wireless',
			shortName: 'Verizon',
			className: 'verizon'
		});

		//Company 8
		Companies.insert({
			companyName: 'Virgin Mobile',
			shortName: 'Virgin Mobile',
			className: 'virgin'
		});
	}

	var csgiCompanyId = Companies.find({shortName:'CSGi'}).fetch()[0]._id;
	var coxCompanyId = Companies.find({shortName:'Cox'}).fetch()[0]._id;
	var virginCompanyId = Companies.find({shortName:'Virgin Mobile'}).fetch()[0]._id;
	var verizonCompanyId = Companies.find({shortName:'Verizon'}).fetch()[0]._id;
	var charterCompanyId = Companies.find({shortName:'Charter'}).fetch()[0]._id;
	var dishCompanyId = Companies.find({shortName:'Dish'}).fetch()[0]._id;
	var comcastCompanyId = Companies.find({shortName:'Comcast'}).fetch()[0]._id;
	var penskeCompanyId = Companies.find({shortName:'Penske'}).fetch()[0]._id;

	// Initialize the Agents database (for testing)
	if(Agents.find({}).fetch().length <= 0) {
		//Agent 1
		Agents.insert({
			companyId: csgiCompanyId,
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
			companyId: csgiCompanyId,
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
			companyId: csgiCompanyId,
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
			companyId: csgiCompanyId,
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
			companyId: csgiCompanyId,
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
			companyId: csgiCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: coxCompanyId,
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
			companyId: coxCompanyId,
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
			companyId: coxCompanyId,
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
			companyId: coxCompanyId,
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
			companyId: coxCompanyId,
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
			companyId: coxCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: virginCompanyId,
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
			companyId: virginCompanyId,
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
			companyId: virginCompanyId,
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
			companyId: virginCompanyId,
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
			companyId: virginCompanyId,
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
			companyId: virginCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: verizonCompanyId,
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
			companyId: verizonCompanyId,
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
			companyId: verizonCompanyId,
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
			companyId: verizonCompanyId,
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
			companyId: verizonCompanyId,
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
			companyId: verizonCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: charterCompanyId,
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
			companyId: charterCompanyId,
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
			companyId: charterCompanyId,
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
			companyId: charterCompanyId,
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
			companyId: charterCompanyId,
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
			companyId: charterCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: dishCompanyId,
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
			companyId: dishCompanyId,
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
			companyId: dishCompanyId,
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
			companyId: dishCompanyId,
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
			companyId: dishCompanyId,
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
			companyId: dishCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: comcastCompanyId,
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
			companyId: comcastCompanyId,
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
			companyId: comcastCompanyId,
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
			companyId: comcastCompanyId,
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
			companyId: comcastCompanyId,
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
			companyId: comcastCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@csgi.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: penskeCompanyId,
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
			companyId: penskeCompanyId,
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
			companyId: penskeCompanyId,
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
			companyId: penskeCompanyId,
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
			companyId: penskeCompanyId,
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
			companyId: penskeCompanyId,
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
			companyId: csgiCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-3.jpg',
			videoUrl: 'https://www.youtube.com/embed/pcZWgvMJ7xg',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault.jpg',
			videoUrl: 'https://www.youtube.com/embed/2uyQ9WG0BIY',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-4.jpg',
			videoUrl: 'https://www.youtube.com/embed/GJpZ0aPQiQ0',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-2.jpg',
			videoUrl: 'https://www.youtube.com/embed/kMAKbE_db3A',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox.jpg',
			videoUrl: 'https://www.youtube.com/embed/3hUwh1coNoU',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox1.jpg',
			videoUrl: 'https://www.youtube.com/embed/shEhwOkIqYE',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox2.jpg',
			videoUrl: 'https://www.youtube.com/embed/f2AfVxQiGKo',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox3.jpg',
			videoUrl: 'https://www.youtube.com/embed/yb-RbXoHJXQ',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Virgin.jpg',
			videoUrl: 'https://www.youtube.com/embed/ePDywwEH3Dw',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Virgin1.jpg',
			videoUrl: 'https://www.youtube.com/embed/EzNL0G81DeE',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Virgin2.jpg',
			videoUrl: 'https://www.youtube.com/embed/7ZYy8Iv9-f4',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Virgin3.jpg',
			videoUrl: 'https://www.youtube.com/embed/oqDPlzdbLG0',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon.jpg',
			videoUrl: 'https://www.youtube.com/embed/i63bzIn6ckQ',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon1.jpg',
			videoUrl: 'https://www.youtube.com/embed/kCZ7UjVR238',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon2.jpg',
			videoUrl: 'https://www.youtube.com/embed/jiErdXcz7jk',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon3.jpg',
			videoUrl: 'https://www.youtube.com/embed/f49dtkztxWg',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter.jpg',
			videoUrl: 'https://www.youtube.com/embed/CmICCOdayRo',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter1.jpg',
			videoUrl: 'https://www.youtube.com/embed/Ia3RlIfq6OU',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter2.jpg',
			videoUrl: 'https://www.youtube.com/embed/c1bu9W8gOlY',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter3.jpg',
			videoUrl: 'https://www.youtube.com/embed/xBaIG5TwO2g',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish.jpg',
			videoUrl: 'https://www.youtube.com/embed/XP2YT74D0fA',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish1.jpg',
			videoUrl: 'https://www.youtube.com/embed/v5AOx622xO8',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish2.jpg',
			videoUrl: 'https://www.youtube.com/embed/IfzBkqTAA2E',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish3.jpg',
			videoUrl: 'https://www.youtube.com/embed/0PM15LReiNQ',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast.jpg',
			videoUrl: 'https://www.youtube.com/embed/5t5jBa1vTn0',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast1.jpg',
			videoUrl: 'https://www.youtube.com/embed/c99kdeeZRdI',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast2.jpg',
			videoUrl: 'https://www.youtube.com/embed/Oj8ZMkxwPIM',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast3.jpg',
			videoUrl: 'https://www.youtube.com/embed/5anjHBgl5X8',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'How to Check Bills Online',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT.jpg',
			videoUrl: 'https://www.youtube.com/embed/UlrQ_0O7_Mg',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'How to Set Up Automatic Billing',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT1.jpg',
			videoUrl: 'https://www.youtube.com/embed/uMJUWEeGdtE',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'When to Dispute a Bad Claim',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT2.jpg',
			videoUrl: 'https://www.youtube.com/embed/CEHpsCIXjd0',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'Finding your Account Number',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT3.jpg',
			videoUrl: 'https://www.youtube.com/embed/5DsNnNHNMMQ',
			agent: Agents.find({}).fetch()[3]
		});
	}
});
