import express from 'express';
import {
	deletePost,
	getPosts,
	createPost,
	likePost,
	updatePost,
} from '../controllers/posts.js';

const router = express.Router();

// When someone visits localhost:5000
// Do not need to important as an object
// patch request is used for updating
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
