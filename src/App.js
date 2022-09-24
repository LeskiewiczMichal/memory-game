import './App.css';
import Header from './components/Header';
import Card from './components/Card';
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
  const countryFlags = [
    america,
    brazil,
    china,
    england,
    france,
    italy,
    norway,
    portugal,
    southKorea,
    swedish,
    turkish,
    ukraine,
  ];
  const countryNames = [
    'America',
    'Brazil',
    'China',
    'England',
    'France',
    'Italy',
    'Norway',
    'Portugal',
    'South Korea',
    'Swedish',
    'Turkish',
    'Ukraine',
  ];

  // map through array of images and create card components from data
  // randomize order of array

  // clickedCards [id of clicked cards]
  // if clickedcards contains clicked card id lost else point +1

  return (
    <div className="app--container">
      <Header />
      <div className="app--cards-container">
        <Card image={china} countryName='South Korea'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>
        <Card image={china} countryName='italy'/>

      </div>
    </div>
  );
}

export default App;
