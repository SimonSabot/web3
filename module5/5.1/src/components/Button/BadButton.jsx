import {Context as FeedbackContext} from "contexts/FeedbackContext";
import { useContext } from "react";

const BadButton =({v})=>{
  const {bad,handleFeedback} = useContext(FeedbackContext);
    return(
        
            <li>
           
              Bad: {bad} <button value="bad" onClick={handleFeedback}> increase bad</button> 
            </li>
        
    )
}

export default BadButton;