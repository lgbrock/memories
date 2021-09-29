// Used for Redux - Allows for scalability when application grows
// changed how to export because error was showing on DOM - Page still loaded properly
export default (posts = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;

		case 'CREATE':
			return [...posts.posts, action.payload];

		default:
			return posts;
	}
};
