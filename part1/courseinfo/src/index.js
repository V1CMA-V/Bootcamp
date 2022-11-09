import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>

const Part = ({part, exercise}) =>{
  return <p>{part} {exercise}</p>
}

const Content = ({part}) => {
    return(
      <div>
        <Part part={part[0].name} exercise={part[0].exercises}/>
        <Part part={part[1].name} exercise={part[1].exercises}/>
        <Part part={part[2].name} exercise={part[2].exercises}/>
      </div>
    )
}



const Total = ({total}) => <p>Number of ecercises {total[0].exercises + total[1].exercises +total[2].exercises}</p>

const App = () => {

  const course ={
    title: 'Half Stack application development',
    parts:[
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.title}/>

      <Content part={course.parts}/>

      <Total total={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))