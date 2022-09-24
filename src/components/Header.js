import './style/header.css'

export default function Header() {
    return (
        <header className="header--container">
            <h1>Memory Card Game</h1>
            <div className='header--counter'>
                <span>Score: 2344</span>
                <span>Best Score: 12</span>
            </div>
        </header>
    )
}