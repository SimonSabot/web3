
import Feedback from "components/Feedback/Feedback"
import { useState } from "react";
const Loading =()=>{

    const [loading, setLoading] = useState(true);
    setTimeout(()=>setLoading(false),3000);
    
    return(
        <>
        { loading?<h1>LOADING</h1>:   <Feedback/> }
        </>
    )
}
export default Loading