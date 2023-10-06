import { useState } from "react";
import Button from "components/Button/Button";
import CounterFeedback from "components/CounterFeedback/CounterFeedback";

const Feedback = ()=>{
    
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

    const setFeedback= (userInput)=>{
        if(userInput===1){
           
                const nGood = good+1;
                setGood(nGood);
              //  localStorage.setItem("good",JSON.stringify(nGood));
        }else if(userInput===2){
            const nNeutral = neutral+1;
            setNeutral(nNeutral);
           // localStorage.setItem("neutral",JSON.stringify(nNeutral));
            
        }else{
            const nBad = bad +1;
            setBad(nBad);
           // localStorage.setItem("bad",JSON.stringify(nBad));
        }
         
          
    }
return (
        <div>
            <h2>give feedback</h2>
            <Button funct={setFeedback} text= "good" delta ="1"></Button>
            <Button funct={setFeedback} text= "neutral" delta ="2"></Button>
            <Button funct={setFeedback} text= "bad" delta ="3"></Button>
            <div>
            <CounterFeedback  good={good} neutral={neutral} bad={bad}/>
            </div>
        </div>
    );
}

export default Feedback;