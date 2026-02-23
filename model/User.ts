import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
        content :string,// in ts type is in lowercase
        createdAt:Date
}

const MessageSchema:Schema<Message>=new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})


export interface User extends Document{
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptingMessage:boolean,
    messages:Message[] // messages from Message Schema 
}


const UserSchema:Schema<User>=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"], // custom message
        trim:true, // to remove extra spaces 
        unique:true
    },
    email:{
        type:Date,
        required:[true,"Email is required"], 
        unique:true,
        match:[/.+\@.+\..+/,"please use a valid email address"] // to check valid email used regex expression 
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is required"]
    },
    verifyCodeExpiry:{
        type:String,
        required:[true,"Verify Code Expiry is required"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAccepting:{
        type:Boolean,
        default:true
    },
    messages:[MessageSchema]
})

// in node js ek bar hi server run krta hai toh schema usi time create ho jayega ek bar
// but next.js runs on edge toh usse nhi pata ki pehli bar run kr rha hai ki dosri bar
// there are two cases of mongoose model
// ek bar jb already model bana hai woh fetch kr rahe hai
// ek time  jb pehlli baar model create kr rahe hai

const UserModel={ mongoose.models.User as mongoose.Model<User> 
                 || mongoose.model<User>("User",UserSchema)}