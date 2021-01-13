import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <MovieList />
      <Header />
    </div>
  )
}

export default App;
