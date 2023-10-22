const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const personName = process.argv[3]
const number = process.argv[4] 

const url =
  `mongodb+srv://simonsabot:${password}@cluster0.zigfruj.mongodb.net/personApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})
function addPerson(){
    const person = new Person({
        name: personName,
        number: number,
      })
      
      person.save().then(result => {
        console.log('added '+person.name +" "+ person.number+ ' to person')
        
        mongoose.connection.close()
      })
}
function getall(){
   Person.find({}).then(result => {
    console.log("persons numbers :")
        result.forEach(p => {
          console.log(p.name +" "+ p.number)
          
        })
        mongoose.connection.close()
      })
}
const Person = mongoose.model('Person', personSchema)

if(number) addPerson();
else getall();


