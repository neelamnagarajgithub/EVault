import mongoose from 'mongoose';
import validator from 'validator';
const ContactusSchema=new mongoose.Schema({
    fulname:{
        type:String,
        required:[true,'Name is Required for Contacting Evault']
    },
    email:{
        type:String ,
        required:[true,"email is required for Contacting Evault"],
        validate: [ validator.isEmail, 'invalid email' ]
        
    },
    message:{
        type:String,
        required:[true,"a Message needed to Send Ur Query"],
    }
});

const ContactModel=new mongoose.model('Issue',ContactusSchema);

export {ContactModel};