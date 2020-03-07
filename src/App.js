import React from 'react';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Random Photo Gallery</h1>
      </header>
      <PhotoGallery />
    </div>
  );
}

export default App;
