const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express()

// connect to mongodb database
// make sure to replace my db string & creds with your own
mongoose.connect(
	'mongodb+srv://admin:admin123@cluster0.rgirv.mongodb.net/gql-ninja?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
)
.then(() => {
	console.log('Connected to database');
});


//middleware
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql:true
}))

app.listen(4000, () => {
	console.log('now listening for request on port 4000')
})