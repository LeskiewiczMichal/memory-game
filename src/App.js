import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { useState } from 'react';
import { nanoid } from 'nanoid';
// import images of flags
import america from './images/america.png';
import brazil from './images/brazil.png';
import china from './images/china.png';
import england from './images/england.jpg';
import france from './images/france.png';
import italy from './images/italy.png';
import norway from './images/norway.png';
import portugal from './images/portugal.png';
import southKorea from './images/south-korea.png';
import swedish from './images/swedish.png';
import turkish from './images/turkish.png';
import ukraine from './images/ukraine.png';

function App() {
  const countries = [
    { image: america, name: 'America' },
    { image: brazil, name: 'Brazil' },
    { image: china, name: 'China' },
    { image: england, name: 'England' },
    { image: france, name: 'France' },
    { image: italy, name: 'Italy' },
    { image: norway, name: 'Norway' },
    { image: portugal, name: 'Portugal' },
    { image: southKorea, name: 'South Korea' },
    { image: swedish, name: 'Swedish' },
    { image: turkish, name: 'Turkish' },
    { image: ukraine, name: 'Ukraine' },
  ];

  // map through array of images and create card components from data
  // randomize order of array
  const cards = countries.map((country) => {
    return (
      <Card
        image={country.image}
        countryName={country.name}
        id={nanoid()}
        handleClick={handleClick}
      />
    );
  });

  function randomizeArr(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  randomizeArr(cards)

  // clickedCards [id of clicked cards]
  const [clickedCards, setClickedCards] = useState([]);
  // if clickedcards contains clicked card id lost else point +1
  function handleClick(id) {
    alert(id);
  }

  return (
    <div className="app--container">
      <Header />
      <div className="app--cards-container">{cards}</div>
    </div>
  );
}

export default App;
