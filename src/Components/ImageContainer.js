import React, {Component} from 'react';
import axios from 'axios';

//API Key from ignored config file
import apiKey from '../config.js';
//Components
import ImageList from './ImageList';
import Loading from './Loading';

class ImageContainer extends Component {
    //allows use of this, provides state for loading component
    constructor() {
        super();
        this.state = {
          images: [],
          loading: true,
        };

      } 
    
    //re-renders component
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
              loading: true
            })
            this.performSearch(nextProps.query);
          } 
        }
      
    //ensures components are in the DOM
  	componentDidMount() {
  		this.performSearch(this.props.query);
  	}
    
    // Gets Flickr API data, returns error message if doesn't work, turns off load once loaded
  	performSearch = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            images: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
        
    }

    // renders image list (or loading state while loading), passes data to ImageList
    render(props){
        return(
        	<div className="photo-container">
			    <h2>Images of {this.props.query}</h2>{/*Displays title dynamically*/}
	            {this.state.loading ? <Loading /> : <ImageList data={this.state.images} />}
            </div>
        );
    }
}

export default ImageContainer;



