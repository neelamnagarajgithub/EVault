import Contactus_sendgrid from "../controllers/send_grid-controller.js";
import express from 'express';

const ContactusRouter=express.Router();

ContactusRouter.route('/send/email').post(Contactus_sendgrid);

export default ContactusRouter;