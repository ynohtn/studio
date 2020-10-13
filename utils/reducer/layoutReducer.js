const layoutReducer = (state, action) => {
	// console.log(state);

	switch (action.type) {
		case 'reference':
			return 'reference';
		case 'references':
			return 'references';
		case 'sample_pack':
			return 'sample_pack';
		case 'samples':
			return 'samples';
		case 'homepage':
			return 'homepage';
		case 'about':
			return 'about';
		default:
			throw new Error();
	}
};

export default layoutReducer;
