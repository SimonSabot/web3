const Button = ({  changeCount,text,delta }) => {
const handleClick=(e)=>{
    const currentDelta=   e.target.dataset.delta;
   console.log("handleClick delta = "+currentDelta);
    changeCount(currentDelta);
   
}

return(
    
    
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  )
}
  export default Button