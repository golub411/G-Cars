import './App.css';
import Presentation from './components/Presintation';
import CardList from './components/CardList';
import { useState } from 'react';
import MyButton from './UI/MyButton';
import { useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(data => {
        setCards(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const [sortedCards, setSortedCards] = useState(cards)
  const [colorOfButton, setColorOfButton] = useState('white')
  

  const changeModelS = () => {
    setSortedCards([])
    console.log('fff')
    let sClass = []
    for (let card of cards) {
      if (card.model === "class s") {
        console.log(card)
        sClass.push(card)
      }
    }
    console.log(sClass)
    setSortedCards(sClass)
  }

  const changeModelC = () => {
    setSortedCards([])
    console.log('fff')
    let cClass = []
    for (let card of cards) {
      if (card.model === "class c") {
        console.log(card)
        cClass.push(card)
      }
    }
    console.log(cClass)
    setSortedCards(cClass)
  }

  const changeModelAll = () => {
    setSortedCards(cards)
  }
  
  const changeModelGls = () => {
    setSortedCards([])
    console.log('fff')
    let glsClass = []
    for (let card of cards) {
      if (card.model === "class gls") {
        console.log(card)
        glsClass.push(card)
      }
    }
    console.log(glsClass)
    setSortedCards(glsClass)
  }

  return (
    <div className="App">
      
      <Presentation/>
      <div className='buttons'>
        <MyButton children="S class" onClick={changeModelS} style={{color: colorOfButton, border: `1px solid ${colorOfButton}`}}/>
        <MyButton children="C class" onClick={changeModelC} style={{color: colorOfButton, border: `1px solid ${colorOfButton}`}}/>
        <MyButton children="GLS class" onClick={changeModelGls} style={{color: colorOfButton, border: `1px solid ${colorOfButton}`}}/>
        <MyButton children="Все модели" onClick={changeModelAll} style={{color: colorOfButton, border: `1px solid ${colorOfButton}`}}/>
      </div>
      <CardList cards={sortedCards}/>
    </div>
  );
}

export default App;
