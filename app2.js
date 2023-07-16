
const yargs = require ("yargs")
 //console.log (yargs.argv)

const data2 =require ("./data2")
    yargs.command({
        command : "add" ,
        describe : "to add an item" ,
        handler : (x)=> {
           data2.addperson(x.id , x.fname , x.lname , x.age , x.city)
        }
        
    })


  yargs.command({
        command : "delete" ,
       describe : "to delete an item" ,
       handler : (x)=> {
        data2.deleteData(x.id)
       }
   })

   yargs.command({
    command : "read" ,
   describe : "to read an item" ,
   builder : {
    id : {
         
        describe : "id",
        demandOption : true , 
        type : "string"
    }
   },
   handler : (x)=> {
    data2.readData(x.id)
   }
})

yargs.command({
    command : "list" ,
   describe : "to list an item" ,
   handler : ()=> {
    data2.listData()
   }
})


yargs.parse()
