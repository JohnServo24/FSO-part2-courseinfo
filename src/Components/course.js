const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((total, x) => total + x.exercises, 0);

    return (
        <strong>total of {totalExercises} exercises</strong>
    )
}

const Content = ({ parts }) => parts.map(item => <p key={item.id}>{item.name} {item.exercises}</p>)

// Course component but we have to declare it multiple times to show all of the courses
const Course = ({ courses }) => {
    const { id, name, parts } = courses;

    return (
        <div>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

// This course component only needs to be declared once, and it shows all of the courses
const Course2 = ({ courses }) => {
    return (
        <>
            {courses.map(course =>
                <div key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )}
        </>
    )
}

export default Course2;