// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDb from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import appointmentRoutes from "./routes/appointmentRoutes.js"; 
// import authRoutes from "./routes/authRoutes.js"; 

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173", 
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// connectDb();

// app.use("/api/auth", authRoutes); 
// app.use("/api/users", userRoutes); 
// app.use("/api/appointments", appointmentRoutes); 

// const playerSchema = new mongoose.Schema({
//   name: String,
//   role: String,
//   age:Number,
//   country: String
// })

// const Player = mongoose.model("Player", playerSchema)

// const matchSchema = new mongoose.Schema({
//   stadium: String,
//   opponent: String,
//   date: Date,
//   players: [
//     { type: mongoose.Schema.Types.ObjectId, ref: "Player" }
//   ],
//   manOfTheMatch: { type: mongoose.Schema.Types.ObjectId, ref: "Player" }
// });

// const Match = mongoose.model("Match", matchSchema)




// app.get("/", (req, res) => {
//   res.send("hospital Appointment System API is running...");
// });


// app.post("/players", async (req, res) => {
//   const player = await Player.create(req.body);
//   res.json(player)
// });

// app.post("/match", async (req, res) => {
//   const match = await Match.create(req.body);
//   res.json(match)  
// });

// app.get("/matches", async (req, res) => {
//   const matches = await Match.find()
//     .populate('players')
//     .populate('manOfTheMatch')  ;
//   console.log(matches)
// })


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose, { mongo } from "mongoose";
// import connectDb from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import appointmentRoutes from "./routes/appointmentRoutes.js";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// connectDb();

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/appointments", appointmentRoutes);

// const playerSchema = new mongoose.Schema({
//   name: String,
//   role: String,
//   age: Number,
//   country: String,
// });

// const Player = mongoose.model("Player", playerSchema);

// const matchSchema = new mongoose.Schema({
//   stadium: String,
//   opponent: String,
//   date: Date,
//   players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
//   manOfTheMatch: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
// });

// const Match = mongoose.model("Match", matchSchema);

// app.get("/", (req, res) => {
//   res.send("Hospital Appointment System API is running...");
// });

// app.post("/players", async (req, res) => {
//   const player = await Player.create(req.body);
//   res.json(player);
// });

// app.post("/match", async (req, res) => {
//   const match = await Match.create(req.body);
//   res.json(match);
// });

// app.get("/matches", async (req, res) => {
//   const matches = await Match.find()
//     .populate("players")
//     .populate("manOfTheMatch");
//   res.json(matches);
// });


// // const apk = await findeOne().populate([
// //   {
// //     path: "salesman"
// //   }
// // ])




// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// })

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number
// })

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   product: { tpye: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//   quantity: Number,
// })

// const User = mongoose.model("User", userSchema);
// const Product = mongoose.model("Product", productSchema);
// const Order = mongoose.model("Order", orderSchema);


// app.post("/seed", async (req, res) => {
//   await User.deleteMany({});
//   await Product.deleteMany({});
//   await Order.deleteMany({});

//   const user1 = await User.create({ name: "Amit", email: "amit@mail.com" });
//   const user2 = await User.create({ name: "Riya", email: "riya@mail.com" });

//   const prod1 = await Product.create({ name: "Gold Ring", price: 5000 });
//   const prod2 = await Product.create({ name: "Silver Chain", price: 2000 });

//   await Order.create([
//     { user: user1._id, product: prod1._id, quantity: 2 },
//     { user: user2._id, product: prod2._id, quantity: 3 },
//     { user: user1._id, product: prod2._id, quantity: 1 },
//   ]);

//   res.json({ success: true, message: "Sample Data Added" });
// });








// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// ---------------------------------------------------------------------------------------------------------------------







// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import connectDb from "./config/db.js";
// // import userRoutes from "./routes/userRoutes.js";
// // import appointmentRoutes from "./routes/appointmentRoutes.js";
// // import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// connectDb();


// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// })

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number
// })

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref:  "User" },
//   product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//   quantity: Number,
// })

// const User = mongoose.model("User", userSchema);
// const Product = mongoose.model("Product", productSchema);
// const Order = mongoose.model("Order", orderSchema);


// app.post("/seed", async (req, res) => {
//   await User.deleteMany({});
//   await Product.deleteMany({});
//   await Order.deleteMany({});

//   const user1 = await User.create({ name: "Amit", email: "amit@mail.com" });
//   const user2 = await User.create({ name: "Riya", email: "riya@mail.com" });

//   const prod1 = await Product.create({ name: "Gold Ring", price: 5000 });
//   const prod2 = await Product.create({ name: "Silver Chain", price: 2000 });

//   await Order.create([
//     { user: user1._id, product: prod1._id, quantity: 2 },
//     { user: user2._id, product: prod2._id, quantity: 3 },
//     { user: user1._id, product: prod2._id, quantity: 1 },
//   ]);

//   res.json({ success: true, message: "Sample Data Added" });
// });


// app.get("/orders-populate", async (req, res) => {
//   const orders = await Order.find()
//     .populate("user", "name email")  
//     .populate("product", "name price")
//     .sort({ _id: -1 });

//   res.json({ success: true, data: orders })
// })

// app.get("/orders-revenue", async (req,res) => {
//   const stats = await Order.aggregate([
//     {
//       $lookup: { //join kr ta he products ko ---> yaha hum order collection ko product collection k sath join kr rhe hain
//         from: "products", // kis collection se join krvana hai
//         localField: "product",// current collection(order) me konsa field use hoga join k liye 
//         foreignField: "_id", // dusri collection me konsa field se match karna hai --> "_id"
//         as: "productDetails", // result me jo naya field banega uska nam --> "productdetails" 
//       },
//     },
//     { $unwind: "$productDetails" },// unwind -> flatten product array , yani array ka element directly object me aa jata hai
//     { // add new calculated field totalAMount
//       $addFields: {
//         totalAmount: { $multiply: ["$quantity", "$productDetails.price"] }
//       }
//     },
//     { // sum up all total amounts --> total revenue
//       $group: {
//         _id: null,
//         totalRevenue: { $sum: "$totalAmount" },
//       }
//     }
//   ])
//   res.json({ success: true, data: stats })
// })



// app.get("/orders-lookup", async (req, res) => {
//   const result = await Order.aggregate([
//     {
//       $lookup: {
//         from: "users",
//         localField: "user",
//         foreignField: "_id",
//         as: "userInfo"
//       },
//     },
//     { $unwind: "$userInfo" },
//     {
//       $lookup: {
//         from : "products",
//         localField: "product",
//         foreignField: "_id",
//         as: "productInfo"
//       }
//     },
//     {
//        $unwind: "$productInfo"
//     },
//     {
//       $project: {
//         _id: 0,
//         userName: "$userInfo.name",
//         productName: "$productInfo.name",
//         totalAmount: {
//           $multiply: ["$quantity", "$productInfo.price"]
//         }
//       }
//     }
//   ])  
//   res.json({ success: true, data: result})
// })


// app.get("/api", (req, res) => {
//   const users = [
//     {
//       id: 1, name: "Shubham",
//     },
//     {
//       id: 2, name: "Rathore"
//     }
//   ]

//   res.json(users)
// })


// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users)
// })

// app.post("/create", async (req,res) => {
//   const newOrder = await Order.create(req.body);
//   res.status(201).json(newOrder)
// })


// app.put("/order/:id", async (req,res) => {
//   const updateOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
//   res.status(201).json(updateOrder)
// })



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// ?<&$*^@!------------------------------------------------------------------------------------------------------------------------!@^*$&>?



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./config/db.js";


dotenv.config();

const app = express()


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

connectDb();


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema)



app.post("/api/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})


app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: "Error fetching users"})
  }  
})

app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})


app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted succesfully "})
  } catch (error) {
    res.status(400).json({ error: error.message })
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));