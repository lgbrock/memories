// Used for Redux - Allows for scalability when application grows
import * as api from '../api';

// Action Types - functions that return an action
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (err) {
		console.log(err.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: 'CREATE', payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
