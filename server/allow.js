import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';

export function allowAll() {
	Agents.allow({
		'insert': function(userId, doc) {
			return true;
		},
		'update': function(userId, doc) {
			return true;
		},
		'remove': function(userId, doc) {
			return true;
		}
	});
}