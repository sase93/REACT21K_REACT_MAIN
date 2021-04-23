import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
}

const endGame = (score) => {
    if (score < 10) {
        return "Try harder!";
    } else if (score < 15) {
        return "You can still do better!";
    } else if (score < 20) {
        return "You're getting the hang of this!";
    } else if (score < 25) {
        return "Nicely done!";
    } else {
        return "Wow, you're good!";
    }
};

const GameOver = (props) => {
    return (
        <div className="gameover">
            <div className="popup">
            <h3>Game over!</h3>
            <p>Final score: {props.score}</p>
            <p>{endGame(props.score)}</p>
            <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

export default GameOver;