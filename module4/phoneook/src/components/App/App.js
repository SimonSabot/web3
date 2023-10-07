import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  let i=0;
  const handleNewNameChange =(e)=>{
    setNewName(e.target.value);
  }
  const addName =(e)=>{
    e.preventDefault();
   setPersons( persons.concat({name:newName}));
   setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(p=>(<li key={i++}>{p.name}</li>))}
      </ul>
    </div>
  )
}

export default App