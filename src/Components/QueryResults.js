import React from 'react';
import ImageContainer from './ImageContainer';

const QueryResults = ({match}) => {

	return (
		<ImageContainer query={match.params.query}/>
	);
}

export default QueryResults;
