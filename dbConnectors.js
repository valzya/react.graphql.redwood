import mongoose from 'mongoose'

mongoose.Promise => global.Promise
mongoose.connect("mongodb://localhost:27017/Inventory", { useFindAndModify: false,
	useFindandModify: false,
	useNewURLParser: true,
	useUnifiedTypology: true,
})

const Activities = mongoose.model("activities", activitySchema)
const Alerts = mongoose.model("alerts", activitySchema)
const Items = mongoose.model("items", activitySchema)
const Users = mongoose.model("users", activitySchema)
})
})