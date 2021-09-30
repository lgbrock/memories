/* eslint-disable import/no-anonymous-default-export */
// Used for Redux - Allows for scalability when application grows
// changed how to export because error was showing on DOM - Page still loaded properly

import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
} from '../constants/actionTypes';

export default (posts = [], action) => {
	switch (action.type) {
		case LIKE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case DELETE:
			return posts.filter((post) => post._id !== action.payload);
		case UPDATE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case FETCH_ALL:
			return action.payload;

		case CREATE:
			return [...posts.posts, action.payload];

		default:
			return posts;
	}
};
