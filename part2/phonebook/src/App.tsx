import { SetStateAction, useState } from "react";
import "./App.css";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addName = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.find((person) => newName === person.name)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const filterNames = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterString(event.target.value);
    setShowAll(false);

    if (filterString === "") {
      setShowAll(true);
    }
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filterString.toLowerCase())
      );

  return (
    <>
      <h1 className="header">Phonebook</h1>
      <Filter filterString={filterString} filterNames={filterNames} />
      <h2 className="header">Add new entry</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2 className="header">Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </>
  );
}

export default App;
