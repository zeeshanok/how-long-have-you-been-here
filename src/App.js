import React from 'react';
import './App.css';
import Clock from './clock';

function App() {
  return (
    <div className="App">
      <Clock onEnterViewport={()=>console.log('enter')}/>
    </div>
  );
}

export default App;
