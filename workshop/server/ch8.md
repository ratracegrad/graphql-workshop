# GraphQLID

For our id parameter in our book query it is looking for a string. But what if you tried to pass it an integer instead of a string? If you remove the strings around the id in the query and try to run it then you will get an error message.

![query error](/images/queryIdError.png)

What if you want to be able to support IDs that can be either strings or numbers? GraphQL provides a data type called GraphQLID.  Let's change our schema to use that instead of GraphQLString for our id. You will need to change it in both the BookType and the RootQuery.

```js
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // code to get data from db / other source
                return books.find(book => book.id === args.id);
            }
        },
    }
});
```

Now that we are using the GraphQLID data type we need to import it from graphql.
```js
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID, 
} = graphql;
```

Now you can use either a string or a number in your book query for the id.  I recommend that you use this data type for all ids in your graphQL API instead of using string.