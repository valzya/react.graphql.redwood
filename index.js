inventory graphql > index.js
import express from "express":
import {  graphqlHTTP } from "express-graphql":
const app = express():

app.get{"/", (_req, res) => (
	res.send("GraphQL is running")
	)}

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
	)

app.listen(8001,  => console.log("Running server locally on localhost: 8001)):
