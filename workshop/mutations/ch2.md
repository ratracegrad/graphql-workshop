# Add Book Mutation

**Challenge** Create an addBook mutation.

Next we are going to create our second mutation that will create a new book. Open up your schema.js file and create your second mutation and call it addBook. This mutation will have the exact same structure as the addBook mutation. It will have a type of BookType. There are three arguments:
* name
* genre
* authorId

Make sure in the resolve function you return the book.save(). Your new mutation should look like this:

```js
addBook: {
    type: BookType,
    args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID }
    },
    resolve(parent, args){
        let book = new Book({
            name: args.name,
            genre: args.genre,
            authorId: args.authorId
        });
        return book.save();
    }
}
```

## Add Books

We can test out our new mutation to add books just like we did for addAuthor. This time instead of entering a dummy entry like we initially did with addAuthor instead I want you to add the books we had in our dummy data. In your mutation for the authorId you need to copy the id that MongoDB automatically created for that author.

```js
mutation {
  addBook (name: "Name of the Wind",genre: "Fantasy", authorId: "5c3138351460cb218bdbf86e") {
    name,
    genre
  }
}
```
## Verify Book Was Created
After you run the mutation, go to mLab and go to your home page. Click on your database. You should now see two collections in your database. one for authors and now one for books. Click on books. You should see the book that you just created in the collection.

Now take the time to add in all 6 of our books from our dummy data into the databse. When you are finished comment out the books array in your dummy data in the schema.js file.