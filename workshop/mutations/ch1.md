# Add Author Mutation

Mutations are what allows us to mutate or change the data in our database. In GraphQL we need to explicitly define what data can be changed and deleted.

## Create Mutations
Open up the schema.js file. Below the RootQuery we are going to create our mutations. We are going to name the variable "Mutation". It will be a new GraphQLObjectType. Inside this we are going to pass in an object. The object will have the name of "Mutation". Next it will have the fields property. The fields property contains the methods people will use to mutate the data in our database. The first field we are going to create is addAuthor. It will have a type of AuthorType. It will have two arguments - name and age. The resolve function will save the new author data to the database. Since we are using a MongoDB database now then we need to use the command to save to the database which is ```author.save()```. Your mutation should look like this.

```js
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        }
});
```

Now that we have created our first mutation we need to export it like we did for our RootQuery. If we did not export it then it would not be available and we would not be able to update data in the database.

```js
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
```

## Add Author to Database

Now that we have ceated our first mutation go to your browser and refresh the page. Verify that the mutation is available in Documentaton Explorer.

By default when you put in an entry into graphiql, graphQL assumes it is a query. We need a way to let graphQL know that we are doing a mutation. We do that by adding the word "mutation" to the front of our entry. Then inside the curly braces we enter the name of our mutation which right now is only addAuthor. The addAuthor mutation takes in two parameters - name and age so we add them next. What we want to see after the new author is created in the database is the name and age so we add that as the fields to be returned. Your mutation shold look like this:

```js
mutation {
  addAuthor (
    name: "Jennifer",
    age: 57
  ) {
    
  }
}
```

When you run your mutation, you should get back this response:
```js
{
  "data": {
    "addAuthor": null
  }
}
```

Verify that your Author was created in your database. In your browser go to your mLab account. If you are on the home page click on your database **gql-refactr**. Then click on the **collections** tab. You will see a new collection called **authors**.  Click on authors and you will see all the documents in that collection in the database. You should see the author that you created.  

We know the data was created successfully in the database but our output on graphiql did not return the author's name and age.  The reason is that in our reslve function for addAuthor did not return anything.  Update your resolve function to return the save like this:

```js
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        }
});
```

In mlab you can click the delete icon next to the author record that you just created. This will return you to an empty database. Go back to graphiql in your browser and refresh the page.  Run your mutation again and this time it will return the author's name and age.

Now take some time and add in all 3 of the authors that we had in our dummy data. Remember you do not need to add the id because MongoDB will automatically add it for you. You can verify all three authors have been added by checking the database on mLab.

When you are finished comment out the entire authors array that was our dummy data in the schema.js file.