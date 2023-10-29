import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons, IPerson } from "./components/Persons";
import { Notification } from "./components/Notification";
import personService from "./services/Persons";

function App() {
  const [persons, setPersons] = useState([] as IPerson[]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons: IPerson[]) => setPersons(initialPersons));
  }, []);

  const addName = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find((person) => newName === person.name);

    if (existingPerson) {
      const toUpdate = confirm(
        `${newName} is already added to the phonebook, replace the old number with the new one?`
      );

      if (toUpdate) {
        personService
          .update(existingPerson.id, nameObject as IPerson)
          .then((updatedPerson: IPerson) => {
            setPersons(
              persons.map((person) => {
                if (person.id === updatedPerson.id) {
                  return { ...person, number: updatedPerson.number };
                } else {
                  return person;
                }
              })
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setErrorMessage(error.response.data.error);
            setPopupType("error");
            setTimeout(() => {
              setErrorMessage("");
            }, 5000);
          });
      }
    } else {
      personService
        .create(nameObject as IPerson)
        .then((returnedPerson: IPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setErrorMessage(`Added ${returnedPerson.name}.`);
          setPopupType("success");
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error);
          setPopupType("error");
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        });
    }
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
      <Notification message={errorMessage} popupType={popupType} />
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
      <Persons personsToShow={personsToShow} setPersons={setPersons} />
    </>
  );
}

export default App;
