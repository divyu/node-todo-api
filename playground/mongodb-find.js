const url = "mongodb://localhost:27017/TodoApp";
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( url , (err,db) => {
  if(err)
    return console.log("Unable to connect to database");

// we can call find() without any arguments or with queries{} to query out something specific.
//  .find() returns a mongodb cursor, this return all documents and actually it is a pointer to those documents.
// The toArray() method returns an array that contains all the documents from a cursor.
//  .toArray() converts the fetched documents(with the help of .find()) into array of objects and returns a promise.
// if every thing goes right 'then' will be called, 'then()' takes 2 handlers, one is for rightful and other one for error handling.

/*
  db.collection("Todos").find().toArray().then( (docs) => {
    console.log('Todos');
    console.log('With using promises');
    console.log(JSON.stringify(docs, undefined, 2));
    //console.log(docs);
  }, (err) => {
    if(err)
      return console.log("Unable to fetch details from database");
  });

  db.collection('Todos').find( {completed:false} ).toArray().then( (docs) => {
    console.log('With using promises');
    console.log(JSON.stringify(docs));
  }, (err) => {
    if(err)
      return console.log("Unable to connect to database");
  });

  db.collection('Todos').find(
    {
      _id: new ObjectID('5b3e274583dcc20f8c683f26')
    }).toArray().then( (docs) => {
      console.log('With using promises');
      console.log(JSON.stringify(docs));
    } , (err) => {
      if(err)
        return console.log("Unable to connect to database");
    });

db.collection('Todos').find().count().then( (count) => {
  console.log(`Todos count : ${count}`);
}, (err) => {
  if(err)
    return console.log("Unable to connect to database");
});
*/

db.collection('Users').find({name : "Divyanshu"}).toArray().then( (docs) => {
  console.log('Users : ');
  console.log(JSON.stringify(docs));
}, (err) => {
  if(err)
    return console.log("Unable to connect to database");
});




db.close();
});
