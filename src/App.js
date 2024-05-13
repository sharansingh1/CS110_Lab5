// src/App.js
import React from 'react';
import './App.css';
import ArticleGroup from './components/ArticleGroup';

function App() {
  return (
    <div className="App">
      <h1>New York Times Articles</h1>
      <ArticleGroup />
    </div>
  );
}

export default App;
