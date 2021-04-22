import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
}

const GameOver = (props) => {
    return (
        <div className="gameover">
            <div className="popup">
            <h3>Game over!</h3>
            <p>Final score: {props.score}</p>
            <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

export default GameOver;