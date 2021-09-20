import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/Post';
import useStyles from './styles';

const Posts = () => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={3}
		>
			{posts.map((post) => (
				<Grid item xs={12} sm={6} key={post._id}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
