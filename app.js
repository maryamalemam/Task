
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

   
 personObj.fname = "Adel" ,
 personObj.lname = "Ahmed" ,
 personObj.age = "40" ,
 personObj.city =  "Cairo" ,

 console.log (personObj)
 
   
 //7
 const personObjJson = JSON.stringify ( personObj)
  console.log(personObjJson)

 //8
 fs.writeFileSync("data.json" , personObjJson)


 


                             