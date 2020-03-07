import React, { Component } from 'react';
import './PhotoGallery.css';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render() {
    return <div className="container">PhotoGallery</div>;
  }
}

export default PhotoGallery;
