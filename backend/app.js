const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5174;

// Middleware
app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Include cookies if needed
}));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Community Model
const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // For storing image paths
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const joinRequestRoute = require("./routes/joinRequest");
app.use("/api/joinRequest", joinRequestRoute);

const Community = mongoose.model('Community', communitySchema);

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Community Routes
app.get('/api/community', async (req, res) => {
  try {
    const communities = await Community.find().populate('members', 'name email');
    res.status(200).json(communities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.post('/api/community', async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const newCommunity = new Community({ name, description, image });
    await newCommunity.save();
    res.status(201).json(newCommunity);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.post('/api/community/join', async (req, res) => {
  try {
    const { userId, communityId } = req.body;
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: 'Community not found.' });
    }

    if (community.members.includes(userId)) {
      return res.status(400).json({ message: 'User already a member.' });
    }

    community.members.push(userId);
    await community.save();

    res.status(200).json({ message: 'Joined community successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// File Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const filePath = req.file.path;
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Enhanced Bionic Text Processing
    const processedText = fileContent
      .split(' ')
      .map(word => {
        const match = word.match(/^(\W*)(\w+)(\W*)$/);
        if (!match) return word;

        const [, prefix, coreWord, suffix] = match;

        if (coreWord.length <= 2) {
          return word;
        }

        const splitIndex = Math.ceil(coreWord.length * 0.4);
        const boldPart = `<b>${coreWord.slice(0, splitIndex)}</b>`;
        const restPart = coreWord.slice(splitIndex);

        return `${prefix}${boldPart}${restPart}${suffix}`;
      })
      .join(' ');

    res.status(200).json({ processedText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
