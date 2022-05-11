const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/firstUsingNode")
.then(()=>console.log("connection successfully........."))
.catch((err)=>console.log(err))


const studentSchema=new mongoose.Schema({
   name:String,
   collegeName:String,
   isComplete:Boolean,
   courseName:String,
   date:{
       type:Date,
       default:Date.now
   }
    
})


//collection
const studentS=new mongoose.model("Student",studentSchema)


// insert documement

// createDocument=async()=>{
//     try{
//         const fDocument=new studentS({
//             name:"vikans chauhan",
//             collegeName: "Rd engineering college",
//             isComplete:true,
//             courseName:"B.Tech",
//         })
//         const result = await fDocument.save();
//         console.log(result);  
//     }catch(err){
//         console.log(err);
//     }
    
// }
// createDocument()


// insert many document


createDocument=async()=>{
        try{
            const f1 =new studentS({
                name:"ramesh singh",
                collegeName: "RKGIT",
                isComplete:true,
                courseName:"B.Tech",
            })

            const f2 = new studentS({
                name:"suresh singh",
                collegeName:"Rkgit",
                isComplete:false,
                courseName:"M.teach"
            })

            const f3 = new studentS({
                name:"Singh kumar",
                collegeName:"MIET",
                isComplete:true,
                courseName:"B.teach"
            })
            const result = await studentS.insertMany([f1,f2,f3]);
            console.log(result);  
        }catch(err){
            console.log(err);
        }
        
    }
    //createDocument()

    const getDocumet =async ()=>{
        try{
          const result = await studentS.find()
          console.log(result)  
        }catch(ex){
            console.log(ex);
        }
        
    
    }
    
    
    //getDocumet() 

const updateDocument =async ()=>{
    try{
    //  const result = await studentS.updateOne({_id: "627a51d1a7eff0839b40d0cc"},{$set:{courseName:"B.Tech"}})
       const result   = await studentS.findByIdAndUpdate({_id:"627bcfebd0e9ceb9392daead"},{$set:{name:"vikanshu chauhan"}},{new:true,useFindAnyModify:false})
      console.log(result)  
    }catch(ex){
        console.log(ex);
    }
    

}

updateDocument()



const deleteDocument =async ()=>{
    try{
       const result   = await studentS.deleteOne({_id:"627bcfebd0e9ceb9392daead"})
      console.log(result)  
    }catch(ex){
        console.log(ex);
    }
    

}

deleteDocument()