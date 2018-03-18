import React from 'react';
import PropTypes from 'prop-types';

import SingleImage from './SingleImage';
import NotFound from './NotFound';
import Loading from './Loading';


const state = {
    images: [
      {
        category: 'Cat',
        source: 'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
        altTag: 'This is a cat'
      },
      {
        category: 'Dog',
        source: 'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
        altTag: 'This is a dog'
      },
      {
        category: 'Beans',
        source: 'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
        altTag: 'This is a bean'
      }
    ]
};

const ImageList = props => 
	<div className="photo-container">{/* takes keyword and api key as props, fetches photos and info from API} */}
	   <h2>Results</h2>{/*Display dynamically (ex. Images of Cats)*/}
		<ul>
			{state.images.map((image, index) =>
				<SingleImage key={index} source={image.source} altTag={image.altTag} category={image.category}/>
			)}
		</ul>
	</div>;
	<NotFound />
	;
	<Loading />;


ImageList.propTypes = {
	//images: PropTypes.array.isRequired
};

export default ImageList;

