import express from 'express';
import {
	deletePost,
	getPosts,
	createPost,
	updatePost,
} from '../controllers/posts.js';

const router = express.Router();

// When someone visits localhost:5000
// Do not need to important as an object
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
