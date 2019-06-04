# Mongoose Model

Now that we have connected to our database, we need to create a schema to define the data in the database. For mongoose a schema is called a model. We need to create our models before we put data into the database. We need a model for books and one for authors.

In your server folder create a new folder called **models**. Inside that folder create these two files:
* author.js
* book.js

## Create Book Schema

Open up the book.js file that you just created. In this file we need to create our mongoose schema. We first need to require the mongoose package that we installed. Then we create a Schema.  Next we define the bookSchema.  The bookSchema will have fields for:
* name
* genre
* authorId

The last thing you need to do is export the model so we can use it elsewhere.

Here is what the file should look like:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);
```
## Create Author Schema

The Author schema will be very similar to the book schema we just created. Copy the book schema and paste it into the author.js file. Change all occurances of the string "bookSchema" to "authorSchema". Change the name of the model from "Book" to "Author".  The author schema will only have two fields:
* name
* age

Remember that age is a Number and not a String.

**NOTE:** We do not have to add an id for either schema because by default MongoDB will create a unique id for every document created in the database.


## Update Resolve Functions

Now that we have created our two database models we will need to require them in our schema.js file. Open up the schema.js file and require both of our models. Use this command:

In our schema file comment out all the code that we have created in all of our resolve functions. We will be replacing it with the correct mongoose call to get data from a MongoDB database.