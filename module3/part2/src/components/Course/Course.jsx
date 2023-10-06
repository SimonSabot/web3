import Part from "components/Part/Part";
const Course = ({course})=>{
    const allPart = course.part;
   
    const title = course.name;

    return(
      <div>
         <h1 >{title}</h1>
         <ul>
            {allPart.map(part =><li key={part.id}><Part name ={part.name}  exo={part.exercises} /></li>)}
          
         </ul>
     </div>  
    )
}
export default Course;