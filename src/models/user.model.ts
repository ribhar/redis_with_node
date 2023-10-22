import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    email: string;
    bio: string;
    profilePicture: string;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    profilePicture: { type: String, required: true },
});

export default mongoose.model<UserDocument>('User', userSchema);
