import cors from "cors";
import express from "express";
import morgan from "morgan";
const app = express();
/****************** Middleware ***********************/
app.use(cors());
// logger configuration
morgan.token("content", function (req, _res) {
    return JSON.stringify(req.body);
});
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :content"));
app.use(express.json());
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
const generateId = () => {
    return Math.floor(Math.random() * 10 ** 8 + 1);
};
app.get("/", (_request, response) => {
    response.send("<h1>Hello World!</h1>");
});
app.get("/api/persons", (_request, response) => {
    response.json(personsInitialData);
});
app.get("/info", (_request, response) => {
    const phonebookEntries = personsInitialData.length;
    const currentTime = new Date();
    response.send(`<div><p>Phonebook has info for ${phonebookEntries} people</p><p>${currentTime}</p></div>`);
});
app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const foundPerson = personsInitialData.find((person) => person.id === id);
    if (foundPerson) {
        response.json(foundPerson);
    }
    else {
        response.status(404).json({ error: "Person not found." });
    }
});
app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    personsInitialData = personsInitialData.filter((person) => person.id !== id);
    response.status(204).end();
});
app.post("/api/persons", (request, response) => {
    const body = request.body;
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "Name and/or Number missing",
        });
    }
    if (personsInitialData.find((person) => person.name === body.name)) {
        return response.status(400).json({
            error: "Name must be unique.",
        });
    }
    const newPerson = {
        id: generateId(),
        name: body.name,
        number: body.number,
    };
    personsInitialData = personsInitialData.concat(newPerson);
    response.json(newPerson);
});
const unknownEndpoint = (_request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";
console.log("PORT env var: ", process.env.PORT);
app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map