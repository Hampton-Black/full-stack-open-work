import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.MONGODB_URI;

console.log(`Connecting to ${uri} ...`);

mongoose.set("strictQuery", false);
mongoose
  .connect(uri as string)
  .then((_result: any) => {
    console.log("Connected to MongoDB!");
  })
  .catch((error: { message: any }) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
  },
});

export type personSchemaType = {
  name: String;
  number: String;
};

// configure JSON responses to omit _id and __v
personSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id?.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Person = mongoose.model("Person", personSchema);
