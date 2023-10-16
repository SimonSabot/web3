import {Context as FeedbackContext} from "contexts/FeedbackContext";

const Button =({v})=>{
    return(
        <div>
            <li>
               <button value={v}></button> 
            </li>
        </div>
    )
}

export default Button;