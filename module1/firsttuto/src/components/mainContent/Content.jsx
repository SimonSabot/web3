import Part from "../part/Part"

const Content=(props)=>{

  
    return(
      <>
       
        <Part  part={props.part1} exo ={props.exercises1} />
     
        <Part  part={props.part2} exo = {props.exercises2} />
        
        <Part part={props.part3} exo ={props.exercises3} />
        
      </>
    )
  }
  export default Content