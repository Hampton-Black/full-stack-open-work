import "./App.css";
import Course from "./components/Course";

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
