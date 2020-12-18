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

query {
	getItems(id: ID): Item,
	getItems: (Item),
	getActivities: (Activity),
	getActivity(name) String, Activity,
	getAlerts: (Alert),
	getAlerts(date: String): Alert,
	getUsers: (Users),
	getUser(id: ID, name: String): User,
	}

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

mutation {
		createItem (ItemInput): Item, 
		createActivity(input) (Activity),
		createAlert (name): String,
		createUser (name): date: String, 
		location: String,
		amount: Int,
		description: String,
}

input: itemInput {
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

