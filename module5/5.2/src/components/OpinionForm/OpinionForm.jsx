import {Context as OpinionContext} from "contexts/OpinionContext";
import { useContext } from "react";
import { useState } from "react";
const OpinionForm =()=>{
    const {addOpinion} = useContext(OpinionContext);
    const [newOpinion,setOpinion] = useState('');

const handleNewOpinion =(e)=>{
    e.preventDefault();
    addOpinion(newOpinion);
    setOpinion("");
}
const handlechange =(e)=>{
    setOpinion(e.target.value);
}


    return(
            <form onSubmit={handleNewOpinion}>
            <input type="text" onChange={handlechange} value={newOpinion}/>
            <input type="submit" value="Add opinion" />
            </form>
    
    )
}
export default OpinionForm;