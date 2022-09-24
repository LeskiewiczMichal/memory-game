import './style/header.css';

export default function Header(props) {
  return (
    <header className="header--container">
      <h1>Memory Card Game</h1>
      <div className="header--counter">
        <span>Score: {props.score}</span>
        <span>Best Score: {props.bestScore}</span>
      </div>
    </header>
  );
}
