import React from 'react';

const QueryResults = ({match}) => {
	let query = match.params.query;

	return (
	    <div className="not-found">
			<h3>HEY!</h3>
			<p>Quit looking for {query}!</p>
	    </div>
	);
}

//<Route path= "/search" exact component={SearchForm} />
//<Route path= "/search/:query" component={QueryResults} />


export default QueryResults;