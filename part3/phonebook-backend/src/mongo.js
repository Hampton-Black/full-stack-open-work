import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(uri);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

// configure JSON responses to omit _id and __v
personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length > 2) {
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3],
  });

  person.save().then((result) => {
    console.log(
      `Added ${process.argv[2]}, number ${process.argv[3]} to phonebook.`
    );
    mongoose.connection.close();
  });
} else {
  console.log("Phonebook:");
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
}
