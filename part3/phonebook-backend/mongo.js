import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import { argv } from "process";

dotenv.config();

const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://fullstack:${password}@cluster0.vwirmps.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(uri);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
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
