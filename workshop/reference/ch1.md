# Query and Mutation Cheatsheet

## Queries

Find the name of a book by id
```js
{ 
  book (id: "5c313a0e2af30c221ea5441a") {
  	name
	}
}
```

Get name and genre of a book by id
```js
{ 
  book (id: "5c313a0e2af30c221ea5441a") {
  	name
	}
}
```

Get name of all authors
```js
{
  authors {
    name
  }
}
```

Get name and age of all authors
```js
{
  authors {
    name,
    age
  }
}
```

Get the name of a single book by id and the name of the author
```js
{ 
  book (id: "5c313a0e2af30c221ea5441a") {
  	name,
    author {
      name
    }
	}
}
```

Get the name of a single book by id and the name of the author all the name of all the books that author has written
```js
{ 
  book (id: "5c313a0e2af30c221ea5441a") {
  	name,
    author {
      name,
      books {
        name
      }
    }
	}
}
```

Find name of an author by id
```js
{
  author(id: "5c3138531460cb218bdbf86f") {
    name
  }
}
```

Find name of an author by id and name of all books they have written
{
  author(id: "5c3138531460cb218bdbf86f") {
    name,
    books {
      name
    }
  }
}

## Mutations

Add a new author to the database
```js
mutation {
  addAuthor (
    name: "Jennifer",
    age: 57
  ) {
    
  }
}
```

Add a new book to the database
```js
mutation {
  addBook (name: "Name of the Wind",genre: "Fantasy", authorId: "5c3138351460cb218bdbf86e") {
    name,
    genre
  }
}
```
