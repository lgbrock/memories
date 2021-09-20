import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// When someone visits localhost:5000
// Do not need to important as an object
router.get('/', getPosts);
router.post('/', createPost);

export default router;
