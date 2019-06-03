const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

// connect to mlab database
mongoose.connect('mongodb://refactr:ga86grad@ds249824.mlab.com:49824/gql-refactr', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});