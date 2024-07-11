const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review= require("./review.js")
const User=require("./user.js")

const listingSchema = new Schema({
    //title is require
    title: {
        type: String,
        require: true,
    },
    description: String,
    //to set defult img useing ----- set:(v) v=> img ternary oprator{v===""?link:v}
    image: {
        url:String,
        filename:String,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    owner:{
         type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
});

//for deleting inside data which have different data storage
listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id : {$in: listing.reviews}})
    }
    
})

//create model use above schema
const Listing = mongoose.model("Listing", listingSchema);
//to export in app.js
module.exports = Listing;