const express = require("express");
const app = express();

const personsInitialData = [
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

app.get("/", (request: any, response: { send: (arg0: string) => void }) => {
  response.send("<h1>Hello World!</h1>");
});

app.get(
  "/api/persons",
  (
    request: any,
    response: {
      json: (arg0: { id: number; name: string; number: string }[]) => void;
    }
  ) => {
    response.json(personsInitialData);
  }
);

app.get("/info", (request: any, response: { send: (arg0: string) => void }) => {
  const phonebookEntries = personsInitialData.length;
  const currentTime = new Date();

  response.send(
    `<div><p>Phonebook has info for ${phonebookEntries} people</p><p>${currentTime}</p></div>`
  );
});

app.get(
  "/api/persons/:id",
  (
    request: { params: { id: any } },
    response: {
      [x: string]: any;
      json: (
        arg0: { id: number; name: string; number: string } | undefined
      ) => void;
    }
  ) => {
    const id = Number(request.params.id);
    const foundPerson = personsInitialData.find((person) => person.id === id);

    if (foundPerson) {
      response.json(foundPerson);
    } else {
      response.status(404).send({ error: "Person not found." });
    }
  }
);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
