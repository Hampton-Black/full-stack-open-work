import dotenv from "dotenv";
import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import { Person, personSchemaType } from "./models/person.js";

dotenv.config();

const app = express();

/****************** Middleware ***********************/
app.use(cors());

// logger configuration
morgan.token("content", function (req: Request, _res: Response) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :content"
  )
);

app.use(express.json());

app.use(express.static("dist"));

/****************** Middleware ***********************/

let personsInitialData = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (_request: Request, response: Response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (_request: Request, response: Response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/info", (_request: Request, response: Response) => {
  const phonebookEntries = personsInitialData.length;
  const currentTime = new Date();

  response.send(
    `<div><p>Phonebook has info for ${phonebookEntries} people</p><p>${currentTime}</p></div>`
  );
});

app.get("/api/persons/:id", (request: Request, response: Response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).json({ error: "Person not found." });
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request: Request, response: Response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((_result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", async (request: Request, response: Response, next) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Name and/or Number missing",
    });
  }

  // const isPersonUnique = await Person.find(
  //   (person: personSchemaType) => person.name === body.name
  // );

  // if (isPersonUnique) {
  //   return response.status(400).json({
  //     error: "Name must be unique.",
  //   });
  // }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });

  newPerson
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${HOST}:${PORT}`);
});
