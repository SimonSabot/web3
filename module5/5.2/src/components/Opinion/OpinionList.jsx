import {Context as OpinionContext} from 'contexts/OpinionContext'
import { useContext } from "react";

const OpinionList =()=>{
    const {allOpinion} = useContext(OpinionContext);
    const {votesForOpinion} = useContext(OpinionContext);
   
    return(
        <div>
            <ul>
                {allOpinion.map(a=>(
                    <li key={a.key}>{a.text} {a.votes} 
                    <button onClick={()=>{
                        votesForOpinion(a.key)
                    }}>votes for this</button>
                    </li>))}
            </ul>
        </div>
    )
}
export default OpinionList;