import dotenv from "dotenv";
import mongoose, { Error, ValidatorProps } from "mongoose";

dotenv.config();

const uri = process.env.MONGODB_URI;

console.log(`Connecting to ${uri} ...`);

mongoose.set("strictQuery", false);
mongoose
  .connect(uri as string)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error: Error) => {
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
      message: (props: ValidatorProps) =>
        `${props.value} is not a valid phone number`,
    },
    required: [true, "phone number is required"],
  },
});

export type personSchemaType = {
  name: string;
  number: string;
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
