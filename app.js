if(process.env.NODE_ENV !="production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// Error handling
const wrapAsync = require("./util/wrapAsync");
const ExpressError = require("./util/ExpressError");
//npm i express-session
const session =require("express-session")
// npm i connect-flash --> 
const flash=require("connect-flash")
//to use passport
const passport=require("passport")
const localStrategy=require("passport-local");
//to require user
const User =require("./models/user.js")



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

// Use method-override to support PUT and DELETE methods in forms
app.use(methodOverride('_method'));

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


// multer for miltidata 


// EJS template engine
app.engine("ejs", ejsMate);


const listingRouter=require("./routes/listing.js")
const reviewRouter=require("./routes/review.js")
const userRouter=require("./routes/user.js")

// Connecting to mongoose
const mongoose = require("mongoose");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust", {
    });
}
main().then(() => {
    console.log("Connection successful to db");
}).catch((err) => {
    console.log(err);
});




//express-session  for cookie
const sessionOptions={
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        // day hr m s ms 
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};
app.use(session(sessionOptions));


app.get("/", wrapAsync((req, res) => {
    res.redirect("/listings");
}));

//flash
app.use(flash())


//passport implimetation
app.use(passport.initialize())//to initialize passpot before use
app.use(passport.session())// so each reqest know passport
passport.use(new localStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//flash and logout in ejs
app.use((req,res,next)=>{
    res.locals.success=req.flash("success")
    res.locals.error=req.flash("error")
    res.locals.currentUser=req.user;
    next()
})


// app.get ("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"deltastudent@gmail.com",
//         username:"delta-student"
//     });
//  let regUser= await User.register(fakeUser,"helloworld") 
//  res.send(regUser)
// })

//for mapping
app.use("/listings",listingRouter)
app.use("/listings/:id/reviews",reviewRouter)
app.use("/",userRouter)


// Error handling route
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    console.error(err);
    res.status(statusCode).render("listings/error.ejs", { message });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
