const express = require("express")
const router = express.Router();
const wrapAsync = require("../util/wrapAsync");
const ExpressError = require("../util/ExpressError");
const { listingSchema } = require("../schema");
const Listing = require("../models/listing");

const multer = require("multer")
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })

//login
const { isLoggedIn } = require("../middleware.js")

const listingController = require("../controllers/listing.js")
// Validation middleware
const validationListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Index route with create route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
        upload.single('listing[image]'),
        validationListing,
        wrapAsync(listingController.renderCreate));
//ulter


// New route
router.get("/new", isLoggedIn,
    listingController.renderNew);

// Show route
router.get("/:id", wrapAsync(listingController.renderShow));

// Create route


// Edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderEdit));

// Update route
router.put("/:id",isLoggedIn,
     upload.single('listing[image]'),
    validationListing,
    wrapAsync(listingController.renderUpdate));

// Delete route
router.delete("/:id", isLoggedIn,
    wrapAsync(listingController.renderDelete));

module.exports = router