import Course2 from "./Components/course";

const App = () => {
  const courses = [
    {
      name: 'Half Stack Application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props the pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Javascript',
      id: 3,
      parts: [
        {
          name: 'Arrow functions',
          exercises: 4,
          id: 1
        },
        {
          name: 'Asynchronous Javascript',
          exercises: 10,
          id: 2
        },
        {
          name: 'JSON',
          exercises: 2,
          id: 3
        }
      ]
    }
  ]

  return (
    <Course2 courses={courses} />
    // <div>
    //   <Course courses={courses[0]} />
    //   <Course courses={courses[1]} />
    // </div>
  )
}

export default App;
