// import express from 'express';
// import mongoose from 'mongoose';
import PostModel from '../models/postModel.js';
// const router = express.Router();

export const getPosts = async (req, res) => {
	try {
		const postModels = await PostModel.find();

		console.log(postModels);

		res.status(200).json(postModels);
	} catch (err) {
		res.status(404).json({ msg: err.message });
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
