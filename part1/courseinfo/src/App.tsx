import "./App.css";

interface courseParts {
  name: string;
  exercises: number;
  id: number;
}

interface course extends courseParts {
  name: string;
  parts: courseParts[];
}

const Header = (props: { courseName: string }) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
};

const Part = (props: { partNumber: string; exerciseNumber: number }) => {
  return (
    <>
      <p>
        {props.partNumber}
        <span>{props.exerciseNumber}</span>
      </p>
    </>
  );
};

const Content = (props: { parts: Array<courseParts> }) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part
          partNumber={part.name}
          exerciseNumber={part.exercises}
          key={part.id}
        />
      ))}
    </>
  );
};

const Total = (props: { parts: Array<courseParts> }) => {
  return (
    <>
      <p>
        Number of Exercises
        <span>
          {props.parts.reduce((sum, part) => sum + part.exercises, 0)}
        </span>
      </p>
    </>
  );
};

const Course = (props: { course: course[] }) => {
  return (
    <>
      {props.course.map((crs) => (
        <div key={crs.id}>
          <Header courseName={crs.name} />
          <Content parts={crs.parts} />
          <Total parts={crs.parts} />
        </div>
      ))}
    </>
  );
};

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack Application Development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1.1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 1.2,
        },
        {
          name: "State of a Component",
          exercises: 14,
          id: 1.3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 1.4,
        },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 2.1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2.2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
