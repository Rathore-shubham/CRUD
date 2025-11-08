import express from "express"
const  router = express.Router()


import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

router.post('/register', async (req, res) => {
  try {
    // const { name, username, password, role, specialization } = req.body;
    // if (!name || !username || !password || !role) return res.status(400).json({ message: 'Missing fields' });

    // const existing = await User.findOne({ username });
    // if (existing) return res.status(400).json({ message: 'Username already exists' });

    // const salt = await bcrypt.genSalt(10);
    // const passwordHash = await bcrypt.hash(password, salt);

    // const user = new User({ name, username, passwordHash, role, specialization });

    const newUser = await User.create(req.body);

    

    res.status(201).json({ message: 'User registered', newUser });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // const matched = await bcrypt.compare(password, user.passwordHash);
    // if (!matched) return res.status(400).json({ message: 'Invalid credentials' });

    // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// module.exports = authRoutes;

export default router