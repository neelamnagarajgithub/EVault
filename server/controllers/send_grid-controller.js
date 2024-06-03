import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { ContactModel } from '../models/send_grid-model.js';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const Contactus_sendgrid=async(req,res)=>{

const sender_req=await ContactModel.create(req.body);
console.log(req.body);
const msg = {
  to: '	evault.company@gmail.com', 
  from: 'neelamnagarj99@gmail.com', // Change to your verified sender
  subject: 'Contact',
  text:sender_req.message ,
  html: `<strong>Query From ${sender_req.fulname}</strong>`,
}

sgMail
  .send(msg)
  .then(res.status(201).json({msg:"success"}))
  .catch((error) => {
    console.error(error)
  })
}

export default Contactus_sendgrid;