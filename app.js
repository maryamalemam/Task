
                          ///Task 1 ///

 //1 
  const person =  {
    fname : "Ahmed" ,
    lname : "Hossam" ,
    age : "20" ,
    city : "Alex" ,
}
  console.log (person)
 
 //2
  const personJson = JSON.stringify (person)
   console.log(personJson)

 //3
  const fs = require ("fs")
fs.writeFileSync("data.json" , personJson)
 
 //4
console.log (fs.readFileSync("data.json") .toString())

 //5
 const personObj = JSON.parse (personJson)
   console.log(personObj)

 //6
 const person2 =  {
    fname : "Adel" ,
    lname : "Ahmed" ,
    age : "40" ,
    city : "Cairo" ,
   }
   console.log (person2)
   
 //7
 const person2Json = JSON.stringify (person2)
 console.log(person2Json)

 //8
 fs.writeFileSync("data1.json" , person2Json)


 


                             