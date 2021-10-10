import express from 'express';
import {
	deletePost,
	getPosts,
	createPost,
	likePost,
	updatePost,
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

// When someone visits localhost:5000
// Do not need to important as an object
// patch request is used for updating
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
