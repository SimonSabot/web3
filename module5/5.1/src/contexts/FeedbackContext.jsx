import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper =(props) =>{
    const [good,setGood] =useState(0);
    const [neutral,setNeutral] = useState(0);
    const [bad,setBad] = useState(0);

    const handleFeedback = (e)=>{
        e.preventDefault();
        const value=e.target.value;
        if(value==="good") setGood(good+1);
        else if (value==="neutral") setNeutral(neutral+1) ;
        else setBad(bad+1);
    }

    
    const reset=()=>{
        setGood(0);
        setBad(0);
        setNeutral(0);
    };
    const exposedValue= {
        good,
        neutral,
        bad,
        handleFeedback,
        reset
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
        </Context.Provider>
}

export {Context, ProviderWrapper};