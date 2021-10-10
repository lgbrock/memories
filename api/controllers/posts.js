import express from 'express';
import mongoose from 'mongoose';

import PostModel from '../models/postModel.js';

const router = express.Router();

export const getPosts = async (req, res) => {
	try {
		const postModels = await PostModel.find();

		console.log(postModels);

		res.status(200).json(postModels);
	} catch (err) {
		res.status(404).json({ message: error.message });
	}
};

export const getPost = async (req, res) => {
	const { id } = req.params;

	try {
		const post = await PostModel.findById(id);

		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new PostModel(post);

	try {
		await newPost.save();

		res.status(201).json(newPost);
	} catch (err) {
		res.status(409).json({ msg: err.message });
	}
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send('No post with id');

	const updatedPost = await PostModel.findByIdAndUpdate(_id, post, {
		new: true,
	});

	res.json(updatedPost);
};

export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`);

	await PostModel.findByIdAndRemove(id);

	res.json({ message: 'Post deleted successfully.' });
};

export const likePost = async (req, res) => {
	const { id } = req.params;

	if (!req.userId) return res.json({ message: 'Unauthenticated' });

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`);

	const post = await PostModel.findById(id);

	const index = post.likes.findIndex((id) => id === String(req.userId));

	if (index === -1) {
		// like a post
		post.likes.push(req.userId);
	} else {
		// dislike a post
		post.likes = post.likes.filter((id) => id !== String(req.userId));
	}

	const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
		new: true,
	});

	res.json(updatedPost);
};
