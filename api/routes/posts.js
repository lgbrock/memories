import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// When someone visits localhost:5000
// Do not need to important as an object
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
