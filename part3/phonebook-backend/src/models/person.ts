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
    minLength: [3, "minimum length is 3 characters"],
    required: [true, "name is required"],
  },
  number: {
    type: String,
    minLength: [8, "minimum length is 8 digits"],
    validate: {
      validator: function (v: string) {
        return /^\d{2,3}-\d*(-\d*)?$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid phone number`,
    },
    required: [true, "phone number is required"],
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
