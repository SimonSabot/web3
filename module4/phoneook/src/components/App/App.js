
import { useState, useEffect } from 'react'

import personService from '../../services/persons'

const App = () => {
 
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  let i=0;

  useEffect(() => {
   personService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [persons])

  const handleNewNameChange =(e)=>{
    setNewName(e.target.value);
  }
  const handleNewTelChange =(e)=>{
    setNewTel(e.target.value);
  }


  const addPerson =(e)=>{
    e.preventDefault();
    const bool =(persons.some(p=>(p.name===newName))&& newTel.match("^([0-9]{2}-[0-9]{2}-[0-9]{7})$"));
    if(bool){
      alert(`${newName} is already present in the list`);
   
   
    }else{
     const nPerson ={
      name:newName,
      number:newTel
    }
       personService.create( nPerson).then(p=>(console.log(p)))
    }
   setNewName('');
   setNewTel('');
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewNameChange}/>
        </div>
        <div>
        number: <input 
          value={newTel}
          onChange={handleNewTelChange}
          placeholder='00-00-0000000'
          pattern='[0-9]{2}-[0-9]{2}-[0-9]{7}'
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(p=>(<li key={i++}>{p.name} {p.number}</li>))}
      </ul>
    </div>
  )
}

export default App