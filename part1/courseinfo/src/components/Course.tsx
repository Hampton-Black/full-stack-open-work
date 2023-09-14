export interface courseParts {
  name: string;
  exercises: number;
  id: number;
}

export interface course extends courseParts {
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

export default Course;
