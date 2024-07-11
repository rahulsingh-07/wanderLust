const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

//for connecting mongoose
// const mongoose=require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:/wanderlust")
}
main().then(()=>{
    console.log("connection successful to db")
}).catch((err)=>{
    console.log(err)
});

//initializing the data
const initDB=async()=>{
    //to delete initial data
    await Listing.deleteMany({});
    // initData.data=initData.data.map((obj))=({...obj, owner:'6688ebad76ff13b4a0dc8ff6'})
    await Listing.insertMany(initData.data); 
    console.log("data was initialized")

}
initDB();