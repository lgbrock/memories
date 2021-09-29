import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	console.log(posts);

	return (
		<>
			<h1>POSTS</h1>
			<Post />
		</>
	);
};

export default Posts;
