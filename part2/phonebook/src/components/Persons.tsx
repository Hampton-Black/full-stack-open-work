interface IPerson {
  name: string;
  number?: string;
}

export const Persons = (props: { personsToShow: IPerson[] }) => {
  return (
    <ul>
      {props.personsToShow.map((person: IPerson) => (
        <li key={person.name}>
          {person.name} - {person.number}
        </li>
      ))}
    </ul>
  );
};
