# Defining Root Query

The way graphQL works is that it creates a graph of the data that is avaialable to the API. The schema defines the object types and the relationships. Users can get data from the graph by accessing what is alled a **Root Query**. We need to deine these access points. We will the ability for users to access:
* a single Book
* a single Author
* all Books
* all Authors

All these Root Queries are defined in the schema.js file. Open up the schema.js file and let's define a new Root Query for the Book.

The Root Query will have a name of RootQueryType and a list of fields. The fields are the Object Types that we will be able to use as an entry point for accessing data.

Add the following to your schema.js file:

```js
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                // code to get data from database or other source
            }
        },
    }
});
```

Now let me go through and explain what we just added.  The fields are the name that we will use in our query. If we want to do a query on a single book we need pass in an argument for the books id. This id is how we know which book we want to return data on.

To do a query using this Root Query it will look like this:

![book Query](/images/bookQuery.png)

The last thing we have defined is our resolve function. The resolve function takes in two parameters - parent and args. The resolve function is where we write code to get our data that we need.

## Export the schema

We need to make this schema available to be passed into our middleware. We do this by exporting it. At bottom of schema.js file add the following:
```js
module.exports = new GraphQLSchema({
    query: RootQuery 
});
```

We are using a new custom GraphQL data type called GraphQLSchema. We need to import this so update your import to include it:

```js
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
```
## Import the Schema

Now that we have defined our schema we need to import it into our middleware. Go back to your app.js file. At the top of the file import in our schema.  Add this line:
```js
const schema = require('./schema/schema');
```

Now that we have the schema imported we can pass it in as a parameter to our middleware. Add the following line after you create the app and before the app.listen.

```js
app.use('/graphql', graphqlHTTP({
    schema: schema
}));
```
Since we are using ES6 we can shorten that to the following:
```js
app.use('/graphql', graphqlHTTP({
    schema
}));
```

## Summary

When you create a query you call a RootQuery. The RootQuery is the entry point into your graph. We have so far defined only one RootQuery called Book. When you call it you must pass in a parameter with the id of the book that you want to access. Next the resolve function is called. The resolve function will be used to get the data and return it to the query. The resolve function has access to the Parent as well as the arguments that were passed into the query.