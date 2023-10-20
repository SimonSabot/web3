import {Context as FeedbackContext} from "contexts/FeedbackContext";
import { useContext } from "react";

const GoodButton =({v})=>{
    const {good,handleFeedback} = useContext(FeedbackContext);
    return(
        
            <li>
           
           Good: {good} <button value="good" onClick={handleFeedback} >increase good</button> 
            </li>
        
    )
}

export default GoodButton;