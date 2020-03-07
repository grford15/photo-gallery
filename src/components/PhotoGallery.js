import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import './PhotoGallery.css';

const UNSPLASH_ACCESS_KEY =
  '9MYmrZtlhv2mlunCa8XLS-obyMKzPWt8hUE6cF67QQU';
const UNSPLASH_SECRET_KEY =
  'u0eKTDSjqHDbQnmrJjcGwNlZvNS7f_79N6p2iztvKLc';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    const unsplash = new Unsplash({
      accessKey: `${UNSPLASH_ACCESS_KEY}`,
    });
    unsplash.photos
      .listPhotos(2, 15, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          results: json,
        });
      });
  }

  render() {
    return <div className="container">PhotoGallery</div>;
  }
}

export default PhotoGallery;
