const express=require("express")
const router=express.Router({mergeParams:true});

const wrapAsync = require("../util/wrapAsync");
const ExpressError = require("../util/ExpressError");
const {reviewSchema } = require("../schema");
const Review = require("../models/review");
const Listing = require("../models/listing");
//login
const {isLoggedIn}=require("../middleware.js")
const reviewsController=require("../controllers/review.js")
const validationReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};




// Reviews - Post route
router.post("/",isLoggedIn,validationReview, wrapAsync(reviewsController.createReview));

//delete Reviews - Post route
router.delete("/:reviewId",wrapAsync(reviewsController.deleteREview))

module.exports=router