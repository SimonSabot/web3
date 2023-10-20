import GoodButton from "components/Button/GoodButton";
import OkButton from "components/Button/OkButton";
import BadButton from "components/Button/BadButton";
import ResetButton from "components/Button/ResetButton";
//<Button key={index} value={f}/>


const FeedbackForm = ()=>{
    

    return(
        
            <ul>

            <GoodButton />
            <OkButton/>
            <BadButton/>
            <ResetButton />
            </ul>
       
    ) 
}

export default FeedbackForm;