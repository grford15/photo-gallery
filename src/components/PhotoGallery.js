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
    const { results } = this.state;
    console.log(results);
    return (
      <div className="container">
        {results.length > 0 ? (
          results.map(result => (
            <div key={result.id} className="photo">
              <a href={result.urls.full}>
                <img src={result.urls.small} alt="alt" />
              </a>
              <h6>{result.user.name}</h6>
              <p>{result.alt_description}</p>
            </div>
          ))
        ) : (
          <h4>Loading ... </h4>
        )}
      </div>
    );
  }
}

export default PhotoGallery;
