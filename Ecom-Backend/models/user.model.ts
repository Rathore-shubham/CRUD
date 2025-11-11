import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    role: string;
    comparePassword(enteredPassword: string): Promise<boolean>
}

const userSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, 
        default: "user"
    }
})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password") ) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()   
})

userSchema.methods.comparePassword = async function (enteredPassword: string) {
    return bcrypt.compare(enteredPassword, this.password)
};

export default mongoose.model<IUser>("User", userSchema)