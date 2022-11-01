import './App.css';
import NavigationBar from './components/navigation/navbar';
import QueryAndResult from './components/body/body';
import React, { useState } from 'react';

function App() {
  return (
    <div className='wrapper'>
      <NavigationBar />
      <QueryAndResult />
    </div>
  );
}

export default App;
