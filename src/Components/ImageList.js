import React from 'react';

//Components
import SingleImage from './SingleImage';
import NotFound from './NotFound';



const ImageList = props => {

	//takes keyword and api key as props, fetches photos and info from API}
	const results = props.data;

	if (results.length > 0) {
		let images = results.map (photo =>
			<SingleImage
			url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} 
			key={photo.id}
			title={photo.title}
			loading={props.loading}
			/>
		);
		return(
				<ul>
					{images}
				</ul>
		);	
	} else {
		return(
			<NotFound />
		);
	}
}


export default ImageList;