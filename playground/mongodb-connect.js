const {MongoClient,ObjectID} = require('mongodb');

// _id is added  by the mongo.
// it is not auto_increment id like in mysql, becoz mongo was designed to implement scalablilty
// when load on server increases
// in that case mongo simply adds new database to  our server without any worry of incrementing id ,as every time it
// generates a brand new id.
// id is not a string ,its a ObjectID instance.
// id is 12 bytes id ,comprises of various things like -
// first 4 bytes gives timestamp. next 3 butes gives machine identifier which helps in making id unique
// next 2 bytes are process identifiers and last 3 are random values.

const url = "mongodb://localhost:27017/TodoApp";

// we can generate our own id without even using mongo ,by passing our own id inside ObjectID() ->
var obj = new ObjectID(4);
console.log(obj);

// console.log(obj.getTimestamp());

MongoClient.connect(url, (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log("connected to the database");

  // db.collection('Todos').insertOne({
  //   text : "something to do",
  //   completed : false
  // } , (err, result) => {
  //       if(err){
  //         return console.log('Unable to connect to database : ',err);
  //       }
  //       console.log(JSON.stringify(result.ops,undefined ,2));
  // });

  // inserting new doc - users (name,age,location)

  db.collection('Users').insertOne({
    name : "Divyanshu Gautam",
    age : 21
    //location : "New delhi , India"
  } , (err,result) => {
    if(err)
      return console.log('Unable to connect to MongoDb server');
    //console.log(JSON.stringify(result.ops));

    // result.ops is an array of all the documents got inserted in collection.
    console.log(result.ops);
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
} );
