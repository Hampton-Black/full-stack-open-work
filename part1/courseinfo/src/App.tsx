import "./App.css";

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

const Content = (props: {
  partNum1: string;
  exerNum1: number;
  partNum2: string;
  exerNum2: number;
  partNum3: string;
  exerNum3: number;
}) => {
  return (
    <>
      <Part partNumber={props.partNum1} exerciseNumber={props.exerNum1} />
      <Part partNumber={props.partNum2} exerciseNumber={props.exerNum2} />
      <Part partNumber={props.partNum3} exerciseNumber={props.exerNum3} />
    </>
  );
};

const Total = (props: { num1: number; num2: number; num3: number }) => {
  return (
    <>
      <p>
        Number of Exercises
        <span>{props.num1 + props.num2 + props.num3}</span>
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a Component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content
        partNum1={part1}
        exerNum1={exercises1}
        partNum2={part2}
        exerNum2={exercises2}
        partNum3={part3}
        exerNum3={exercises3}
      />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  );
};

export default App;
