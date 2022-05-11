const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/studentManagement")
.then(()=>console.log('connect successfully...'))
.catch((err)=>console.log(err))


//create schemma 

const studentScheema =new mongoose.Schema({
                            name:String,
                            rollNo:Number,
                            class:String,
                            failInAnyclass:Boolean,
                            admissionDate:{
                                type:Date,
                                default:Date.now
                            }
                        })

// create Models

const studentCollection = new mongoose.model('studentDetail',studentScheema);

const createDocument=async()=>{
    try{
            const f1= new studentCollection({
                name:"J A Ram",
                rollNo:12345,
                class:"12th",
                failInAnyclass:false
            });
            const f2= new studentCollection({
                name:"Jackson Singh",
                rollNo:12345678,
                class:"10th",
                failInAnyclass:true
            });
        
        $totalResult = await studentCollection.insertMany([f1,f2])
        console.log($totalResult);
    }catch(err){
        console.log(err)
    }
   
}
 
//createDocument()





const findDocument = async()=>{
    const result2 = await studentCollection.find()
    const result  =  await studentCollection.find({rollNo:{$in:[12345,2345678]}})
    const result1 =  await studentCollection.find({$and:[{rollNo:12345},{class:"12th"}]})
    console.log(result2)
    console.log("===========using Operator============")
    console.log(result1)
    console.log("============== Count==============");
    const totalRecords = await studentCollection.find().countDocuments()
    console.log(totalRecords);
    console.log("=============ORDER BY===============");
    console.log( await studentCollection.find().sort({name:-1}))
}
 

findDocument()
