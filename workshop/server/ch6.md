# Resolve Function

## Adding Data to Database
The resolve function is responsible for getting the data that is returned to the query. It has access to the arguments that were passed into the query. That argument is the id of the book we want to search for. The resolve function can use that id to search through the data to find the right book. The data can be in a SQL database or a noSQL database. 

To get going quickly we are going to use dummy data that is an array of book objects. Go to your schema.js file and enter the following dummy data:
```js
// dummy data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
    { name: 'The Hero of Ages', genre: 'Fantasy', id: '4' },
    { name: 'The Colour of Magic', genre: 'Fantasy', id: '5' },
    { name: 'The Light Fantastic', genre: 'Fantasy', id: '6' }
];
```

Each book has a name, genre and id.  The id is what we will use in our resolve function to find the correct book. We will use the ES6 find method that is available on Arrays in JavaScript.  Add this line to your resolve function.
```js
return books.find(book => book.id === args.id);
```

## Testing Our Query
We have now created our schema and imported it into our middleware. If you go to your browser and enter the url:
```
localhost:3000/graphql
```
you will get this error message:

 ![query error](/images/queryError.png)

 We get this error message because it is expecting you to interact somehow with the data. This is because we have not provided a query string to graphQL. If we want to test out our graphQL server, we can use a product called graphiQL. graphiQL is the tool we were using earlier to do queries. 

 To use graphiQL to test your queries add another property to your middleware called graphiql.  Your middleware should look like this:
 ```js
 app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
```

Now if you refresh your browser you should see the graphiql tool. To test your book query enter the following query into graphiql:
```js
{
  book (id: "2") {
    name
  }
}
```

After entering the query click the run button. You should see data returned on the right side of the screen.

![query results](/images/queryResults.png)