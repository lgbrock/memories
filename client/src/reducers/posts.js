// Used for Redux - Allows for scalability when application grows
export default (posts = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return {
				...posts,
				posts: action.payload,
			};
		case 'CREATE':
			return {
				...posts,
				posts: [action.payload, ...posts.posts],
			};
		default:
			return posts;
	}
};
