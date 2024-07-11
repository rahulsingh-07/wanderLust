const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview=async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author=req.user._id
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    //console.log("New review saved");
   // res.send("New review saved");
   res.redirect(`/listings/${listing._id}`)}


   
   module.exports.deleteREview=async(req,res)=>{
    let {id,reviewId}=req.params;
//pull for remove
    await Listing.findByIdAndUpdate(id,{$pull: {reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)

    res.redirect(`/listings/${id}`)
}