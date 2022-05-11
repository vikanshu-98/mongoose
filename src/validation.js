const mongo = require('mongoose');
const validation = require('validator');


//connection
mongo.connect('mongodb://localhost:27017/Playlist').then(()=>console.log("connection is successfully")).catch((err)=>console.log(err))



//scheema 

const scheema = new mongo.Schema({

    name:{
        type:String,
        required:true,
        //lowercase:true,
        trim:true,
        uppercase:true,
        minlength:[2,'minimum should be 2 letter'],
        maxlength:4
    },
    email:{
        type:String,
        validate(value){
            if(! validation.isEmail(value)){
                throw new Error("email is not valid.Kindly!! insert the valid email.")
            }
        }
    },
    ctype:{
        type:String,
        required:true,
        lowercase:true,
        enum:['database','nodejs','expressjs']
    },
    videos:{
        type:Number,
        // min:1,
        // max:5,
        // validate:{
        //     validator:function(value){
        //         return value.length<0
        //     },
        //     message:"Video cout should not be negative"
        // }

        validate(value){
            if(value<0){
                throw new Error("Videos count should not be negative.")
            }
        }
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }

})

//Models 

const collection = new mongo.model('playList',scheema)

insertDocument = async()=>{
  
  try{
        const data=new collection({
            name:"                                 ram ",
            email:"abc@",
            ctype:"database",
            videos:2,
            active:true
        })
        const result = await collection.insertMany([data]);
        console.log(result);

    }
    catch(ex){
        console.log(ex);
    }


}




insertDocument()