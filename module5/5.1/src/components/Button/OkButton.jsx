import {Context as FeedbackContext} from "contexts/FeedbackContext";
import { useContext } from "react";
const OkButton =({v})=>{
    const {neutral,handleFeedback} = useContext(FeedbackContext);
    return(
        
            <li>
           
            Ok: {neutral} <button value="neutral" onClick={handleFeedback} >increase ok</button> 
            </li>
        
    )
}

export default OkButton;