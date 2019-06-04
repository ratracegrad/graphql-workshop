# Create Server Project

The first thing we need to do is to create a server for graphQL. All the server files need to be created inside a folder. Create a new folder called ```server``` on your computer. You can create the folder with this command:

```js
mkdir server
```

**Note** I create all my development projects inside a folder called ```projects```. So I will navigate to this folder in my terminal first. You need to navigate in the terminal to wherever you want to create the folder for your server files.

After you created the ```server``` folder, then you need to change into that folder. Use this command:

```js
cd server
```

## Initialize Project 

Once we are inside the server we need to initialize a node project. You can do that with this command:
```js
npm init
```

This command will ask you a series of questions about your project. You can just press ```enter``` for all the questions or you can put in custom answers if you want.

This command will create a file called ```package.json``` inside your server folder. This file will keep track of all the dependencies we have for this project. This file will also have all the scripts we create for this project.


## Install Express

We want to create an Express application. We will need to install ```express``` as a dependency for our project. To install ```express``` use this command:
```js
npm install express --save
```

Once this command has finished running, it will add express as a dependency in yor package.json file. It will also create a file called ```package-lock.json```.

It will also create a folder called ```node_modules```. This folder will contain all the dependencies that we will use in our project.
