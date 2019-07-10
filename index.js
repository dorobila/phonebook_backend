const express = require("express");
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  },
  {
    name: "safasd",
    number: "q14123",
    id: 5
  }
];

app.get("/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date();
  const nrPersons = Number(persons.length);

  response.send(
    `<div> <p>Phonebook has info for ${nrPersons} people</p> <p>${date}</p> </div>`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
