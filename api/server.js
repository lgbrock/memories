import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import postRoutes from './routes/posts.js';
const PORT = process.env.PORT || 5000;

const app = express();

// Dotenv config
dotenv.config();

// Middleware config
app.use(express.json());
app.use(morgan('common'));
app.use(cors());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

// Routes
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
	res.send('Hello to memories api');
});

// Connect to PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
