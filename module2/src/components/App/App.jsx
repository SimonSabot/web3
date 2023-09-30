import Display from "components/Display/display" 
import Button from "components/Button/Button"
import { useState } from "react"

const App = () => {
    if(!localStorage.getItem("counter")) localStorage.setItem("counter",0);
    const firstval = localStorage.getItem("counter") ;
    const [counter, setCounter] = useState(parseInt(firstval));
    console.log('rendering with counter value', counter)
  
    const changeCount = (delta) =>{
        setCounter(counter+parseInt(delta));
        
        localStorage.setItem("counter",JSON.stringify(counter));
    }
  
    return (
      <div>
        <Display counter={counter} />
        <Button changeCount={changeCount} text="+5" delta = "5"/>
        <Button changeCount={changeCount} text="set to 0" delta = {-counter} />
        <Button changeCount={changeCount} text="-5" delta="-5"/>
      </div>
    )
  } 
  export default App;