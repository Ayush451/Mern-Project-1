import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

userSchema.pre('save', async function (next){
    if (!this.isModified('password')){ //if password isn't changed 
        next();
    }
    const salt = await bcrypt.genSalt(10); //key to hash the password
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (enteredPassword){ //checks if hash password matches with entred password (Schema built in method)
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;