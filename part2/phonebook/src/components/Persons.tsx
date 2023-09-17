import personService from "../services/Persons";

export interface IPerson {
  id: number;
  name: string;
  number?: string;
}

export const Persons = (props) => {
  const deletePerson = async (person: IPerson) => {
    alert(`Delete ${person.name}?`);
    await personService.deletePerson(person.id);
    props.setPersons(
      props.personsToShow.filter((p: IPerson) => p.id !== person.id)
    );
  };

  return (
    <ul>
      {props.personsToShow.map((person: IPerson) => (
        <li key={person.id}>
          {person.name} - {person.number}
          <button
            type="submit"
            className="small-btn"
            onClick={() => deletePerson(person)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
