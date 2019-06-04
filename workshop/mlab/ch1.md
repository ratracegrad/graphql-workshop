# Create Mongo Database

So far all we have done is fetch data from a database. Now we are going to look at updating data that exists in a database. To do that we will be connecting to a MongoDB database. This database will reside on mLab. mLab allows us to create a MongoDb database online. This saves the hassle of us having to install and configure MongoDB on our computers.

## Register mLab Account

[Go to mlab](https://mlab.com) and register a new account. It is free to create an account. Once you have registered your account then login to your account. On your mLab homepage click the "Create new" button to create a mongoDb database.

![create new](/images/createnew.png)

For the Cloud Provider click on "Amazon Web Services". For the Plan Type click on "Sandbox".  Then click the "Continue" button.

![cloud provider](/images/cloudProvider.png)

For the AWS Region click on US East (Virginia)(us-east-1). Then click the "Continue" button.

![aws region](/images/awsRegion.png)

For the database name enter "gql-refactr". Then click the "Continue" button.

![database name](/images/databaseName.png)

Finally click the "Submit Order" button. This will create a MongoDB database for us. It may take a minute or two for it to spin up.

## Create Database User

Now that we have created our database we need to create a database user. Click on the Users tab. 

![users tab](/images/database.png)

Then click the "Add database user" button.

Enter a username and password. For my database the username is refactr. You can choose whatever name you want and whatever password you want. You just have to remember what they are because we will use this to connect to the database from our server.