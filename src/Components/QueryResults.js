import React from 'react';
import ImageContainer from './ImageContainer';

//returns query from Search Form input, passes as query to render in image container
const QueryResults = ({match}) => {

	return (
		<ImageContainer query={match.params.query}/>
	);
}

export default QueryResults;
