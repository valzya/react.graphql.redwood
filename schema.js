type Item {
	id: id
	name: String
	date: String
	location: String
	amount: Int
}

type Activity {
	id: IDname: String
	date: String
	description: String
}

type Alert {
	id: ID
	name: String
	date: String
	description: String
}

type User {
	id: ID
	name: String
	date: String
	description: String
}

type Query {
	getItems(id: ID): Item,
	getItems: (Item),
	getActivities: (Activity),
	getActivity(name) String, Activity,
	getAlerts: (Alert),
	getAlerts(date: String): Alert,
	getUsers: (Users),
	getUser(id: ID, name: String): User,
	}

input ActivityInput (
	id: ID
	name: String
	date: String
	description: String
	)

input AlertInput (
	id: ID
	name: String
	date: String
	description: String
	)

input ItemInput (
	id: ID
	name: String
	date: String
	description: String
	)

input UserInput (
	id: ID
	name: String
	date: String
	description: String
	)

	import (resolvers) from './resolvers'

input itemInput {
	id: ID
	name: String
	date: String
	location: String
	amount: Int
	}

input ContentInput {
	id: ID
	name: String
	date: String
	location: String
	description: String
	}

type Mutation {
		createActivityInput: {( input)} => (
		const ID = require('crypto')).randombytes(10).tooString('hex')
	rootID(ID) = input

	return new Activity(ID, input);
	),
createAlert: {( input)} => (
		const ID = require('crypto')).randombytes(10).tooString('hex')
	rootID(ID) = input

	return new Alert(ID, input);
	),
createItem: {( input)} => (
		const ID = require('crypto')).randombytes(10).tooString('hex')
	rootID(ID) = input

	return new Item(ID, input);
	),
createUser: {( input)} => (
		const ID = require('crypto')).randombytes(10).tooString('hex')
	rootID(ID) = input

	return new User(ID, input);
	),
}


input ActivityInput (
	id = ID
	name: String
	date: String
	description: String
	)

input itemInput {
	createActivity(input: itemInput)
	createAlert(input: itemInput)
	createAlert(input: itemInput)
}

type User{
	id: ID
	name: String
	date: String
	description: String
}
const schema => makeExecutableSchema{(typeDefs, resolvers)}

const activitySchema = new mongoose.Schema({
name: (
	type: String
	), 
date (
	type: String
	),
description (
	type: String
	),
})

const AlertSchema = new mongoose.Schema({
	name: (
		type: String
		),
	date: (
		type: String
		),
	amount: (
		type: Number
		),
	location: (
		type: String
		),
})

const ItemSchema = new mongoose.Schema({
name: (
	type: String
	), 
date (
	type: String
	),
amount (
	type: String
	),
location (
	type: String
	),
})

const UserSchema = new mongoose.Schema({
name: (
	type: String
	), 
date (
	type: String
	),
amount (
	type: String
	),
location (
	type: String
	),
})

const Activities = mongoose.model("activities", activitySchema)
const Alerts = mongoose.model("alerts", alertsSchema)
const Items = mongoose.model("items", activitySchema)
const Users = mongoose.model("users", activitySchema)

export (schema);