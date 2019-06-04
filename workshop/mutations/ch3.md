# Update Resolve Functions

Previously we had commented out all the code in every resolve function in our  schema.js file. We commented out the code because the resolve functions were returning data from our dummy data. We need to go back and update them now so that they are returning data from our MongoDB database.



## Update BookType

Open your schema.js file.  In the resolve function for the BookType object type, add the method to find authors from a MongoDb database. Previously we were finding author by their id. MongoDB provides a similar method called findById. Update your resolve function to be this:

```js
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // return authors.find(author => author.id === parent.authorId);
                return Author.findById(parent.authorId)
            }
        }
    })
});
```

## Update AuthorType
Our previous resolve function for AuthorType returned all books that matched the Author's id. We cannot use the findById() method that we used for BookType because it will return only a single book. To find all books we can use the MongoDb find() method.  Your AuthorType should look like this now:

```js
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // return books.filter(book => book.authorId === parent.id);
                return Book.find({ authorId: parent.id });
            }
        }
    })
})
```

## Update RootQuery

Now that you are familiar with the findById() method from MongoDB you can use it to update the book and author resolve methods in RootQuery.

```js
book: {
    type: BookType,
    args: { id: { type: GraphQLID }},
    resolve(parent, args) {
        // code to get data from db / other source
        // return books.find(book => book.id === args.id);
        return Book.findById(args.id);
    }
},
author: {
    type: AuthorType,
    args: { id: { type: GraphQLID }},
    resolve(parent, args) {
        // code to get data from db / other source
        // return authors.find(author => id === parent.authorId);
        return Author.findById(args.id);
    }
},
```

For books and authors in rootQuery we need to use the .find() method. Previously with .find() we were passing in an object that was being used to find the appropriate entry in the database. If you instead pass in an empty object it will return all documents in the database. So update the resolve for books and authors to do this.

```js
books: {
    type: new GraphQLList(BookType),
    resolve(parent, args) {
        // code to get data from db / other source
        // return books;
        return Book.find({});
    }
},
authors: {
    type: new GraphQLList(AuthorType),
    resolve(parent, args) {
        // code to get data from db / other source
        // return authors;
        return Author.find({});
    }
}
```

## Test our Queries

Now we can go back to graphiql and test out our queries. Create queries for all books, all authors, and for a single book or a single author.