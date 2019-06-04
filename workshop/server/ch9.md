# Author Query

Now that we have our book query finalized we want to add a query for Author.  Every book has an author. An author may write one book or many books. If we have an Author we want to be able to get details about the author and a list of book(s) they have written.

To start we need to add some dummy data for our Authors. Add the following dummy data to your schema.js file.
```js
const authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
]
```

## Create Author ObjectType

We will follow a very similar definition for our Author ObjectType that we did for our Book. Copy your BookType in the schema.js file.  Change the variable name to AuthorType. Change the name to **Author**.

For the fields we an keep id and name. In our dummy data there is no genre field but there is an age field. Change genre to name. In our dummy data the age field is a number not a string. So we will be using a new data type called GraphQLInt. Change the GraphQLString to GraphQLInt.  Your new Author ObjectType should look like this:
```js
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});
```


Don't forge to import this new data type from graphql.

```js
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;
```

## Add RootQuery
We now have a Book and Author ObjectType but currently our RootQuery can only query a book.  Let's add a new query for author to RootQuery.

**CHALLENGE:**
Try to create the Author ObjectType yourself. If you get stuck you can use the code below:

```js
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return books.find(book => book.id === args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return authors.find(author => author.id === args.id);
            }
        },
    }
});
```

## Documentation Explorer

Go to your browser and refresh the page. You will notice that the Documentation Explorer now shows both RootQueries - book and Author.

![both RootQuery](/images/bothQueryType.png)

Create a query for Author that returns name and age.