# Create Server File

In your server folder create a new file called ```app.js```.

## Create Express App

Open this file in your editor. The first thing we need to do is to required the express module we just installed. Add this line:
```js
const express = require('express');
```

Now that we have required express then we will create an app by calling the express function. Add this line:
```js
const app = express();
```

## Set Port

Now that we have created our app we need to tell it which port to listen to. We tell our app what port to listen to and we have to pass it a callback function. When the app starts listening to the port, this callback function will be executed. We will put a console.log in the callback function to let us know the server is listening.

Add this to your file:
```js
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
```

## Test Your Express Server

If we run our app, we should see the console.log displayed in our terminal. To test your server, go to your terminal and enter the following command:
```js
node app
```

You should see the console.log in your terminal that the server is listening on port 3000.

To stop running the server, enter ```ctrl-c```.

## Install nodemon

Now every time we update our ```app.js``` file we will need to stop our server in the terminal and start it again for our changes to take effect. There is a package called ```nodemon``` that will automatically restart the server when the ```app.js``` file changes. This makes development a lot easier.

From the terminal enter this command to install nodemon:
```js
npm install nodemon --save
```

Now that we have it installed we can start our server now using the command:
```js
nodemon app
```
