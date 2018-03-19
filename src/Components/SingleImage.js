import React from 'react';
import PropTypes from 'prop-types';

const SingleImage = props =>
		<li>
	    	<img src={props.url} alt={props.title} category={props.category} />
	  	</li>

SingleImage.propTypes = {
  altTag: PropTypes.string,
  category: PropTypes.string,
};

export default SingleImage;


