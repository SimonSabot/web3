import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Context = React.createContext(null);

const ProviderWrapper =(props)=>{

   const [allOpinion,setAllOpinion] =useState([]);

   const addOpinion = (o)=>{
  
    const nopinion={
        key: uuidv4(),
        text: o,
        votes: 1
    }
    setAllOpinion(allOpinion.concat(nopinion));
   }
   const votesForOpinion=(e)=>{
     
        const newallOpinion= [...allOpinion];
        const nValue =newallOpinion.find(o=>(o.key===e));
        if(!nValue) return undefined;
        nValue.votes +=1;
        setAllOpinion(newallOpinion);
     
   }

   const exposedValue = {
    allOpinion,
    addOpinion,
    votesForOpinion
   }
   return <Context.Provider value={exposedValue}>
   {props.children}
   </Context.Provider>

}

export {Context, ProviderWrapper};