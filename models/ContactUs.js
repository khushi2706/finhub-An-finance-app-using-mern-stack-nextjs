// models/ContactUs.js
import mongoose from 'mongoose';

//schema for contact-us page 
const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Please provide a phone number"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: "Phone number must be a 10-digit number",
    },
  },
});

// Use the existing model if it exists, or create it if it doesn't
export default mongoose.models.ContactUs || mongoose.model('ContactUs', ContactUsSchema);
