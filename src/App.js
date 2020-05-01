import React from 'react';
import './App.css';
import './gym.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <p><span style={{color:'#ffffff', fontFamily: 'georgia, palatino', fontSize: 'xx-large',backgroundColor: '#00000080',border: 'ridge'}}>Enciende el&nbsp;<span style={{fontSize: '80px', fontFamily: 'impact, chicago', color: '#ff0000'}}>FUEGO</span></span></p>
      </div>
      <div>
        <p><span style={{color: '#ffffff', fontFamily: 'georgia, palatino', fontSize: 'xx-large',backgroundColor: '#00000080',border: 'ridge'}}>Que hay en tu&nbsp;<span style={{fontFamily: 'impact, chicago', fontSize: '80px', color: '#ff0000'}}>INTERIOR</span><span style={{color: '#ffffff', fontFamily: 'georgia, palatino', fontSize: 'x-large'}}><br /></span></span></p>
        <p>&nbsp;</p>
      </div>
      </header>
    </div>
  );
}

export default App;
