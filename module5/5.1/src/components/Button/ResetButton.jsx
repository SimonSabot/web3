import {Context as FeedbackContext} from "contexts/FeedbackContext";
import { useContext } from "react";
const ResetButton =({v})=>{
    
    const {reset} = useContext(FeedbackContext);
    return(
    
            <li>
           
              Reset <button value="reset" onClick={reset} >Reset score</button> 
            </li>
        
    )
}

export default ResetButton;