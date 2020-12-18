

class Activity (
constructor(id, { name, date, descrition}))
this.id = id
this.name = name
this.date = date
this.description = desription
}
)
class Alert (
constructor(id, { name, date, descrition}))
this.id = id
this.name = name
this.date = date
this.description = desription
}

class Item (
constructor(id, { name, date, descrition}))
this.id = id
this.name = name
this.date = date
this.amount = amount
this.location = location
}

const rootDb = ()

export const resolvers = (
	Query: {
		getActivity: ({id}) => {
			return new Activity(id, rootDb(id))
			Activities.findById(id, (err, activity) =>)
			if (err) {
				reject(err)
				else (
					resole(activity)
					)
			}),

getActivities: () =>
return Activities.find(rootDb)
),
		getActivities: ({id}) => {
			return new Activities(id, rootDb(id))
			),
getAlerts: () =>
return Alerts.find(rootDb)
),
		getAlerts: ({id}) => {
			return new Alerts(id, rootDb(id))
			),

getItem: () =>
return new Item(rootDb)
),
getItem: ({id}) => {
			return new Item(id, rootDb(id))
			),

getItems: () =>
return new Items(rootDb)
),
getItems: ({id}) => {
			return new Items(id, rootDb(id))
			),
(
getUser: () =>
return new User(rootDb)
),
getUser: ({id}) => {
			return new User(id, rootDb(id))
			),

getUsers: () =>
return new Users(rootDb)
),

getUsers: ({id}) => {
			return new Users(id, rootDb(id))
			),
Mutation: (
	createActivity: {( input)} => (
		const id = require('crypto')).randombytes(10).tooString('hex')
	rootID(id) = input

	return new Activity(id, input);
	),
createAlert: {( input)} => (
		const id = require('crypto')).randombytes(10).tooString('hex')
	rootID(id) = input

	return new Alert(id, input);
	),
createItem: {( input)} => (
		const id = require('crypto')).randombytes(10).tooString('hex')
	rootID(id) = input

	return new Item(id, input);
	),
createUser: {( input)} => (
		const id = require('crypto')).randombytes(10).tooString('hex')
	rootID(id) = input

	return new User(id, input);
	),
	),
);
updateActivity: ( , {input}) => (
	return new Promise(resolve, reject) => 
	Activities.findOneAndUpdate(
		(_id = input.id),
		input,
		(err,activity) => (
			if(err)
				) else {
					resolve(activity)
				}
					))
		)
updateAlert: ( , {input}) => (
	return new Promise(resolve, reject) => 
	Alert.findOneAndUpdate(
		(_id = input.id),
		input,
		(err,alert) => (
			if(err)
				) else {
					resolve(alert)
				}
					))
updateUser: ( , {input}) => (
	return new Promise(resolve, reject) => 
	User.findOneAndUpdate(
		(_id = input.id),
		input,
		(err,user) => (
			if(err)
				) else {
					resolve(user)
				}
					))
	deleteActivity: { , ( id) =>
		Activities.remove(
			( _id: id).
			(err) =>
			if (err) {
				reject(err):
				{ else }
				resolve("Successfully delected activity"):
			}
	deleteAlert: { , ( id) =>
		Alert.remove(
			( _id: id).
			(err) =>
			if (err) {
				reject(err):
				{ else }
				resolve("Successfully delected alert"):
			}
	deleteUser: { , ( id) =>
		User.remove(
			( _id: id).
			(err) =>
			if (err) {
				reject(err):
				{ else }
				resolve("Successfully delected user"):
			}
			);
			})
	}
	}
	}
)