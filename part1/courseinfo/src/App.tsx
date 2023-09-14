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
      <Part
        partNumber={props.parts[0].name}
        exerciseNumber={props.parts[0].exercises}
      />
      <Part
        partNumber={props.parts[1].name}
        exerciseNumber={props.parts[1].exercises}
      />
      <Part
        partNumber={props.parts[2].name}
        exerciseNumber={props.parts[2].exercises}
      />
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

const Course = (props: { course: course }) => {
  return (
    <>
      <Header courseName={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a Component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
