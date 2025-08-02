import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Nikhil:7827545782200400@cluster0.gppvejb.mongodb.net/food-del').then( () => console.log("DB Connected"))
}