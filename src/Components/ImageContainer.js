import React, {Component} from 'react';
import axios from 'axios';
//API Key
import apiKey from '../config.js';
//Components
import ImageList from './ImageList';
import Loading from './Loading';

class ImageContainer extends Component {
    constructor() {
        super();
        this.state = {
          images: [],
          loading: true,
        };

      } 
    
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
              loading: true
            })
            this.performSearch(nextProps.query);
          } 
        }
      
    //calls this function before it renders
	componentDidMount() {
		this.performSearch(this.props.query);
	}
    
  	performSearch = (query) => {
    //interpolated variables retrieved from the array thru React in Dev Tools
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



