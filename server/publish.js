import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js'

export function publishAll() {
	Meteor.publish("Agents", function() {
        return Agents.find();
    });
}