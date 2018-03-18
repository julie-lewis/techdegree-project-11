import React from 'react';
import PropTypes from 'prop-types';

const SingleImage = props =>
		<li>
	    	<img src={props.source} alt={props.altTag} category={props.category} />
	  	</li>

SingleImage.propTypes = {
  source: PropTypes.string.isRequired,
  altTag: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SingleImage;



