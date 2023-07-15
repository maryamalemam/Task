                          ///Task2///

const fs = require ("fs")
const allData = require ("./allData")

//1-  to add 
const addperson = (id , fname , lname , age , city ) =>{
    const allData = loadData ()

    const duplicatedData = allData.filter ((obj)=> {
        return obj.id === id 
    })
    console.log(duplicatedData)
     
    if (duplicatedData.length == 0) {
    allData.push({
        id : id ,
        fname : fname ,
        lname : lname , 
        age : age ,
        city : city ,
    })

          saveAllData(allData)
    } else {
        console.log ("ERROR")
    }    
             ///////////////////////////
}

const loadData = () => {

    try {
        const dataJson = fs.readFileSync ("data2.json").toString()
        return JSON.parse (dataJson)
    }

    catch {
        return []
    }
}
             ////////////////////////////

const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync( "data2.json" , saveAllDataJson )
}
             /////////////////////////////

 //2-  to delete           
const deleteData = (id) => {
    const allData = loadData ()

    const dataToKeep = allData.filter ((obj) =>{
        return obj.id !== id
    })

    saveAllData(dataToKeep )
}

             //////////////////////////////
 
 //3- to list             
 const listData = () => {
    const allData =loadData()
    allData.forEach((obj)=>{
        console.log(obj.fname , obj.lname , obj.city)
    })
 }

             /////////////////////////////

 //4-  to read         
const readData = (id) =>{
    const allData =loadData()
    const itemNeeded = allData.find ((obj) => {
        return obj.id == 5
    })
       console.log(itemNeeded) 
}

             //////////////////////////////
module.exports ={
    addperson ,
    deleteData ,
    readData ,
    listData ,
}            