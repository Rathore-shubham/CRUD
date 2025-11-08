// import express from "express";
// import User from "../models/userModel.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "user deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;



import express from "express"
const  router = express.Router()
import auth from "../middlewares/authMiddleware.js"
import User from "../models/userModel.js"

router.get('/', auth, async (req, res) => {
  const role = req.query.role;
  const filter = role ? { role } : {};
  const users = await User.find(filter);
  res.json(users);
});

export default router;