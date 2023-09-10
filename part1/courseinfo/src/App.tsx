import "./App.css";

interface courseParts {
  name: string;
  exercises: number;
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
          {props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises}
        </span>
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a Component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
