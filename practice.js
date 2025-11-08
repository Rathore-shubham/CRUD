//<-------------------REACT.JS-------------------->

// react is a library for building UI, uses react router manually, client side rendering


// Virtual DOM --> The Virtual DOM is a lightweight copy of the real DOM in memory.
// React updates the Virtual DOM first, compares it with the previous version (diffing), and only updates the changed parts in the real DOM.
// Improves performance & efficiency.

// Keys --> Keys help React identify which items changed, added, or removed in a list.
// Always use unique keys (like id) in list rendering
{users.map(u => <li key={u.id}>{u.name}</li>)}


// Controlled and Uncontrolled Components

// | Type             | Data Controlled By | Example                          |
// | ---------------- | ------------------ | -------------------------------- |
// | **Controlled**   | React state        | `value={state}`                  |
// | **Uncontrolled** | DOM itself         | `ref` used to access input value |


// Context API --> Used to avoid prop drilling and share data globally (like theme, user, language).

// React.memo and useMemo / useCallback -- > Used for performance optimization and preventing unnecessary re-renders.

// | Hook/Method     | Use For                  |
// | --------------- | ------------------------ |
// | `React.memo()`  | Memoize a component      |
// | `useMemo()`     | Memoize a computed value |
// | `useCallback()` | Memoize a function       |



// Lazy Loading / Code Splitting --> Used to load components only when needed — improves performance.
const About = React.lazy(() => import('./About'));

// In Next.js, it happens automatically (SSR + dynamic import).
import dynamic from 'next/dynamic';
// const About = dynamic(() => import('./About'));



// NEXT.JS --> framework built on top of react , has built in file based routing, supports SSR, SSG, ISR and CSR, better SEO.


// SSR (Server-Side Rendering) --> means the HTML is generated on the server for each request, then sent to the browser


// HOOKS --> hooks are function that let u use state and lifecycle features infunctional components

// useState --> manage component state
// useEffect --> run side effects(API calls)
// useContext --> use context API
// useRef --> reference DOM or values
// useMemo , useCallback --> optimize performance




// PROP DRILLING --> passing props from parent --> child --> grandChild unnecessarily

// Ways to avoid:
// Use React Context API
// Use state management libraries (Redux, Zustand, Jotai)
// Use custom hooks


// How to Manage API Calls in React/Next.js -->

// Common ways:
// Fetch API
// Axios (more features)
// React Query / TanStack Query (for caching, loading states)


// Dynamic Routing --> It lets you create routes based on parameters (like blog post IDs).

// example : -->   app/blog/[slug]/page.js




{/* <------------------------------------------------------------------------------------------------------> */}





//<-------------------JAVASCRIPT-------------------->


// DATA TYPES

// string, NUmber, boolean, undefined

// var --> function scoped , can be hoisted
// let --> block scoped , cant be hoisted but can be reassigned
// const --> block scoped

// Hoisting --> means moving declaration to the top of their scope before the execution of code


//  == and ===
// == --> compare the value 
// === --> compare value and type

// Arrow function --> shorter and cleaner way to write funtion, cannot be called before declared

// normal function --> longer (funtion keyword) and hoisting can be called before its declared


// function declaration --> hoisted ( can call before defining ), for reusable named function
function greet() {}

// function expression 
// function greet = function () {}
// not hoisted , for dynamic callback function



// CALLBACK FUNCTION --> it is a function passed as an argument to another function and is called after some work is done 

app.post("/users", (req,res) => {
    // (req, res) is an callback function                  
    res.send("user created")
})


// ASYNC PROGRAMMING --> JS runs one line at a time Async programming helps JS handle long tasks ( like API calls, file reads ) without blocking other code, task can run in background , freeing the main thread



// PROMISE --> it represents a value that will be available in the future

// states --> pending, resolved (then()), rejected (catch())



// ASYNC/AWAIT --> a cleaner way to handle promises using async and await


// HIGHER ORDER FUNCTION --> its a function that takes another function as an argument or return a function
// that is .map(), reduce() , filter()

app.use((req,res,next) => {
    console.log("middleware");
    next()
})

// REST --> used to gather multiple argument into an array
app.post("/user", (req, res) => {
    const { name, email, ...otherDetails } = req.body;
    console.log(otherDetails)
})


// SPREAD --> used to unpack values from an array object


// API IN JS
fetch("...")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))




// DEBOUNCING -->optimize function that fire too often ( like typing and scrolling )
//  --> wait until the user stops doing something for a certain time
//  EXP --> searching when user stops typing




{/* <------------------------------------------------------------------------------------------------------> */}





// <----------------BACKEND--------------->


// <----------------MONG0DB--------------->

// SQL = structured & strict
// NoSQL = flexible & fast

// Document in MongoDB --> A document is a single record in MongoDB — similar to a row in SQL,
// but stored as a JSON-like object (BSON).


// Collections --> A collection is a group of documents — like a table in SQL.
// Each collection stores related documents (e.g. all users in users, all posts in posts).


// CRUD Operations in MongoDB
// CRUD = Create, Read, Update, Delete

// | Operation  | MongoDB Method                 | Example                                                      |
// | ---------- | ------------------------------ | ------------------------------------------------------------ |
// |   Create   | `insertOne()` / `insertMany()` | `db.users.insertOne({ name: "Raj" })`                        |
// |   Read     | `find()` / `findOne()`         | `db.users.find({ age: 25 })`                                 |
// |   Update   | `updateOne()` / `updateMany()` | `db.users.updateOne({ name: "Raj" }, { $set: { age: 26 } })` |
// |   Delete   | `deleteOne()` / `deleteMany()` | `db.users.deleteOne({ name: "Raj" })`                        |


// findOne() vs find()

// | Method        | Returns                   | Example                             |
// | ------------- | ------------------------- | ----------------------------------- |
// |   findOne()   | Single matching document  | `db.users.findOne({ name: "Raj" })` |
// |   find()      | Cursor (multiple results) | `db.users.find({ city: "Indore" })` |


// handle Relations (User → Posts)  --> MongoDB is non-relational, but you can handle relations in two ways

// For small related data → use embedding
// For large or shared data → use referencing


{/* <------------------------------------------------------------------------------------------------------> */}



// <----------------NODE.JS---------------->

// NON-BLOCKING --> it can start a task (like reading a file or querying a database) and move to other task without waiting for it to finish

// EVENT DRIVEN ARCHITECTURE --> it reacts to events, when something happens like button click, data arrives or file finishes reading, it runs the code assiged to that event

// SINGLE THREADED -->  it uses one main thread to handle everything , instead of creating a new thread for each task


// AUTHENTICATION --> checing who u are 

// 1. user enter email/pass 
// 2. server checks the credentails in DB,
// 3. if correct, the server generates a token ( JWT, session ID or cookie )
// 4. token sent to the client ( browser or app ).
// 5. browser stores the token ( localstorage, sessionstorage or cookies ),

// #now the user is authenticated - the server knows who they are



//AUTHORIZATION --> checking what you can do

// 1. user tries to access a resuorce eg. admin / dashboard,
// 2. browser send a token along with the request,
// 3. server checks the token to verify the user's identity ( Authentication ),
// 4. server checks user role and permissions ( AUTH ),
// ex --> only users with role admin can access dashboard
// 5. if allowed --> server sends data
// 6. if not --> server sends 403 forbidden

// # now the user is authorized --> allowed to perform specific actions




// MULTER FLOW 

// user selects file --> submits form
// browser sends multipart form data
// multer intercepts --> stores file --> adds file info to request,
// router handler process file --> saves/uses it
// server responds --> client sends confirmation



const multer = require("multer");
const path = require('path');
const fs = require('fs');

//define the upload directory
const uploadDir = path.join(__dirname, "..", 'uploads');

//create the directory if it doesnt exist
if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// configure storage settings
const storage = multer.diskStorage({ // Defines where and how files are stored.
    //destination folder for uploaded files
    destination: function (req, file, cb) { // function to set the storage folder.
        cb(null, uploadDir)
    },
    //naming uploaded files
    filename: function (req,file, cb) { //Function to set the filename, sanitizing it and adding a timestamp to avoid collisions.
        const ext = path.extname(file.originalname);//get file extension
        const baseName = path.basename(file.originalname, ext)
            .replace(/[^a-zA-z0-9]/g, '_');// sanitize file name
        cb(null, `${Date.now()}_${baseName}${ext}`)// Append timestamp
    }
})

//filter files based on type
const fileFilter = (req,file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = allowedTypes.test(file.mimeType);

    if(extName && mimeType) {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed'));
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
})

module.exports = upload;







{/* <------------------------------------------------------------------------------------------------------> */}

// Practical Tasks


// Build a Simple Form + Submit to API


import { useState } from 'react';
import axios from "axios";
import { PassThrough } from 'stream';

export default function ContactForm() {
    const [form ,setForm ] = useState({ name: "", email: ""});

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("/api/users", form);
        alert("user saved!")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input type='email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}  />
            <button type='submit' >submit</button>
        </form>
    )
}



// Mini CRUD App (Users / Tasks / Products)





const data = [
    {
        name: 'shubham',
        age: 24
    },
    {
        name: 'Rathore',
        age: 20
    }
]

// data.find(age)



const user = { id: 1, name: "shu"}

const secretKey = "akscjbkjbcjksb"


//tokeen generation
const token = jwt.sign(user, secretKey, { expiresIn: "1h"})

console.log(token)



//verify token
const decoded = jwt.verify(token, secretKey)



// ?------------------------------------------------------------------------------------------------?







const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: "user"
    }
},{timestamp: true})

export const User = mongoose.model("User", userSchema)



//middleware

export const verifyToken = () => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({ message: "No token provided"})

    jwt.verify(token, process.env.JWT_SECRET, { expiresIn: "1d"})
}









































