import pkg from "svix";
const { Webhook } = pkg; 
import User from '../models/user.js';

export const clerkwebhook =async (req, res) => {
try {
    const wh = new webhook.Webhook(process.env.Clerk_webhook_Secret);
    await wh.verify(JSON.stringify(req.body), {
        'svix-id': req.headers['svix-id'],
        'svix-timestamp': req.headers['svix-timestamp'],
        'svix-signature': req.headers['svix-signature']
    });
    const {type, data} = req.body;
    switch(type) {
        case 'user.created':{
            const userData={
                _id:data.id,
                email:data.email_addresses[0].email_address,
                name:data.first_name + " " + data.last_name,
                image:data.profile_image_url,
                resume:"",

            }
            await User.create(userData);
            res.JSON({})
            break;

        }
        case 'user.deleted':{
            await User.findByIdAndDelete(data.id);
            res.JSON({})
            break;

        }
         case 'user.updated':{

               const userData={
                
                email:data.email_addresses[0].email_address,
                name:data.first_name + " " + data.last_name,
                image:data.profile_image_url,
               

            }
            await User.findByIdAndUpdate(data.id,userData);
            res.JSON({})
            break;
        }
        default :
        break;
    }
        
    
} catch (error) {
    console.log(error);
    res.status(400).json({message:'Webhook Error'});
    
}
}