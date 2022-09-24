import './style/card.css';

export default function Card(props) {
  return (
    <div
      className="card--container"
      onClick={() => props.handleClick(props.countryName)}
    >
      <img className="card--image" src={props.image} alt="ok" />
      <h5 className="card--country-name">{props.countryName}</h5>
    </div>
  );
}
