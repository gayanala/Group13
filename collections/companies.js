import { Mongo } from 'meteor/mongo';

export const Companies = new Mongo.Collection('Companies');

CompanySchema = new SimpleSchema({
	companyName: {
		type: String,
		label: 'Company Name',
		optional: false
	},
	shortName: {
		type: String,
		label: 'Company Short Name',
		optional: false
	}
});

Companies.attachSchema(CompanySchema);
