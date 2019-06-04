# Documentation Explorer

GraphQL automatically provide documentation explaining all the queries, object types and data description for you. In top right corner of your browser window your will see the word **Docs**. Clicking on this will open up the Documentation Explorer. The Documentation Explorer will tell you everything you need to know about this API.

Click on RootQueryType. This will show that there is only one query available and that is book.

 ![book query](/images/bookQueryType.png)

You will see that it is listed under the title of **fields**. This is what we used in defining our RootQuery in our schema. Also note that the name is **book** which is the name that we gave it. In parenthesis it shows the argument id which we defined. Then it shows that this query type is of type Book which is the name we gave to our BookType.

To find what fields are available click on **Book**. It shows that it has these available fields:
* id
* name
* genre

All fields are of type String.

## Customizing our Query

Remember when I showed you the data that was returned from our DIYZ application for the homepage. It was returning data that was never displayed to the user. It was sending wasted data via the API. If I wanted to change the data that was returned it would require somebody to write me a new endpoint for our REST API.  With GraphQL I control the data that is returned to me.

You can modify your book query to also return the genre field as well as the name field.
```js
{
  book (id: "2") {
    name,
    genre
  }
}
```

When you run this updated query it returns exactly what you requested. Nothing more and nothing less.

## Summary

GraphQL provides an interface to test your queries called graphiql. You have to enable it in your middleware to be able to use it. Graphiql provides a Documentation Explorer that details the graph that is available to you. Even if you are not familiar with an API the Documentation Explorer will tell you everything you need to know about the graphQL API.