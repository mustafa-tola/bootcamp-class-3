import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App({ name, age }) {
  return (
    <div>
      Hello From App.js updated {name} Age = {
      age - 5}
    </div>
  )
};

export default App;
