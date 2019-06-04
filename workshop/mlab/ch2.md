# Connect to Database

At the top of the screen is the connection string you will need to use to connect to your database. There are two options available:
* connect using the mongo shell
* connect using a driver

Copy the connection string listed for connecting using a driver.

## Install Mongoose

Go back to your terminal and instll a package called mongoose. You install it with this command.
```
npm install mongoose --save
```

Open up your app.js file. You will need to require the mongoose package you just installed.

```
const mongoose = require('mongoose');
```

Next you need to connect to database. In the app.js file add the following code.
```js
// connect to mlab database
mongoose.connect('mongodb://<username>:<password>@ds249824.mlab.com:49824/gql-refactr', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});
```

Replace username with the username that you created. Do the same for password.

If you check our console you will see that it says that the server has started and listening on port 3000. It also should say that it has connected to the database.