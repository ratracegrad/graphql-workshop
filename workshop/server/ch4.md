# Setup GraphQL Server

## Install GraphQL Server
Now that we have our Express server installed, we need to install our GraphQL server. To setup a GraphQL server we need to install 2 packages into our application.

The first package is called graphql. The second package is express-graphql. 

The graphql package is the main installation of GraphQL. It is a JavaScript implementation of GraphQL. The express-graphql package will help our express app understand graphQL. Out of the box Express does not understand graphQL.

From terminal you can install these packages using the command:
```js
npm install graphql express-graphql --save
```

## Setup GraphQL Server

Just like we did before with express, we need to require the graphql server in our app.js file. Open up the app.js file and enter this command below the line that requires express.

```js
const graphqlHTTP = requires('express-graphql');
```

The express-graphql package allows express to understand graphQL. Now that we have it we can tell our server to use it so can run our graphQL API. We do this by using graphql as middleware on a single router in our server. That endpoint will allow us to interact with our graphQL data.

We now have to tell our app to use the middleware for the endpoint '/graphql'. Since by default Express does not understand graphQL, we will tell our middleware to let the express-graphql package handle the calls. That package allows you to pass in parameters. The parameters that you pass in is the schema for your graphQL data.

The schema tells us about our graphQL data and how our graph will look. The schema will define:
* what data types we have (Book & Author)
* what fields are available for each data type
* relationship between data types

We need a way to programmatically create this schema and pass it into express-graphql.


## Create Schema

Create a new folder inside your server folder called **schema**. Inside that folder create a file called **schema.js**.

Open up the ```schema.js``` file you just created. The first thing we need to do is to require graphql. Enter this line:
```js
const graphql = require('graphql');
```
Next we need to define the schema for our data. The first step is to define the object types that we want in our graph. Our application will have two object types: Book and Author.

![graph image](/images/graph.png)

To define our two object types we need to get GraphQLObjectType from graphql package. We will do this by using object destructuring. Add this line:

```js
const { GraphQLObjectType } = graphql;
```

## Define a New Type

We will start with creating our Book object type. We will give it a name and then pass in an object as a parameter to the GraphQLObjectType function. This object will define everything about the new Book object type. We will also define the fields that will be available on this object type. 

Fields will actually be a function. We wrap it in a function so that there is no confusion between the definitions of different object types.  The function will return all the fields that are available.

Add the following line:
```js
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString }
    })
});
```

This tells us that the field id will be of type GraphQLString. We cannot just say the type is String. We have to use the special data types defined by GraphQL.

Since we have defined a data type of GraphQLString, we need to import it from graphql. Update the previous line to include the GraphQLString data type.
```js
const { GraphQLObjectType, GraphQLString } = graphql;
```

Now let's add a name and genre fields to our BookType. Update BookType to be:
```js
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre:  { type: GraphQLString },
    })
});
```

## Summary

We have defined our first Object Type. We gave it a name of **Book**. It has 3 fields available - id, name,  and genre. This is the first step in defining our schema. Next we need to pass this schema into our middleware.