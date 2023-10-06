const Button = ({funct,text,delta}) =>{
    
    const clickHandler =(e)=>{
      const  currentDeltaValue = e.target.dataset.delta;
      console.log(currentDeltaValue)
      funct(parseInt(currentDeltaValue));
    }
    

    return(
        <button onClick={clickHandler} data-delta= {delta} >
            {text}
        </button>    
        )
}

export default Button;