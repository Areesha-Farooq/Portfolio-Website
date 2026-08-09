import mongoose from 'mongoose';

// Schema for a single contact-form submission
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

export default mongoose.model('Message', messageSchema);
