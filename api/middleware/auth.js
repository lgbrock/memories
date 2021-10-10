import jwt from 'jsonwebtoken';

const secret = 'test';

// wants to like a post
// click the like button => auth middleware (NEXT) => like controller...

const auth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, secret);

			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);
			// sub differentiates the user
			req.userId = decodedData?.sub;
		}

		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
