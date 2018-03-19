import React from 'react';

//displays single images with data passed from image container and image list
const SingleImage = props =>
		<li>
	    	<img src={props.url} alt={props.title} />
	  	</li>


export default SingleImage;


