import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Items = (props) => {
  return(
    <div>
      {props.cards.map(card => 
        <div key={card.id}>
          {card.model}
          <img src={card.photo} style={{width: "500px", height: "300px"}}/>
        </div>
      )}
    </div>
    
  )
}

function App() {
  const [appState, setAppState] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(data => {
        setAppState(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="App">
      <Items cards={appState}/>
    </div>
  );
}

export default App;
