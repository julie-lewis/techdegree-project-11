import React from 'react';

//displays when non-existent URL is called
const Error = props =>
    <div className="not-found">
		<h3>Oh No!</h3>
		<p>The page you're looking for doesn't exist.  Please try again.</p>
    </div>;


export default Error;