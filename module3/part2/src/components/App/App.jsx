import Course from 'components/Course/Course'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import './app.css'




const App = () => {
 const course = {
  id: 1,
  name:'Half Stack application development',
  part:[
    {
      id:1,
      name:"Fundamentals of React",
      exercises:10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
    
  ]
 } 



  return (
    <div>
    <Footer/>
    <Course course={course}/>
    </div>
   
  )
}
export default App;