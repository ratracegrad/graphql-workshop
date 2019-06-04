# Non Null

In our mutation it is possible for somebody to create a new Book and not pass in the name of the book. Thus we have an entry in the database for a book with no name. So we want to avoid this. GraphQL provides a data type called GraphQLNonNull. If we wrap a field with this then it will not allow you to submit a mutation without having the required parameters. So let's update our mutations for this.

## Add GraphQLNonNull

First we need to import this new data type from graphql.
```js
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;
```

Next in our Mutation we need to wrap all our args with the new GraphQLNonNull data type like this:

```js
name: { type: new GraphQLNonNull(GraphQLString) },
```

Take some time and update every argument in your mutation to have this new GraphQLNonNull data type.

## Test Mutation

Open up graphiql and refresh the page. Then try to create a new mutation for addAuthor but do not include the author's name. First you will see a red squiggly line underneath the name of your mutation to signify that something is wrong. If you run the mutation you will get back an error message that name is a required field but was not provided.

![non null error](/images/nonNullError.png)
