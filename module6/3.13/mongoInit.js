require('dotenv').config()
const mongoose = require('mongoose')

const allPersons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      id: 2,
      name: "Ada lovelace",
      number: "39-44-5232323",
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-2345345",
    },
    {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-64234122",
    },
  ]


const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url)
    .then( result => { 
        console.log('connected to MongoDB')
        console.log(1);
     })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

    const personSchema = new mongoose.Schema({
        id:Number,
        name:String,
        number:String,
    });

function bob(){
       
      allPersons.forEach(p=>{
        console.log(p)
        const person =new Person(p);
        person.save().then(r=>{
            console.log(r +" saved");

       })
      })
      mongoose.connection.close()
      
      }

      const Person = mongoose.model('Person', personSchema);

   
     bob();

 

  

  
