import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';
import { Videos } from '../collections/videos.js';

export function publishAll() {
	Meteor.publish("Agents", function() {
        return Agents.find();
    });
	
	Meteor.publish("Videos", function() {
			return Videos.find();
	});
}