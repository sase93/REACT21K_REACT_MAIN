import React, { Component } from 'react';
import AnimalCard from './AnimalCard';
import './Animal.css';

class AnimalsList extends Component {
    state = {
        animals: [
            {id: 1, name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },
            
            {id: 2, name: "Rabbit", img: "https://source.unsplash.com/hS41iEO300E/" },
            
            {id: 3, name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
        ],
    };

    clickHandler = (youcannameliberally) => {
        alert('Hello my name is ' + youcannameliberally);
    }

    render() {
        const animalsList = this.state.animals.map((animal) => {
            return <AnimalCard key={animal.id} name={animal.name} img={animal.img}
            clickme={() => this.clickHandler(animal.name)}
            // or: clickme={this.clickHandler.bind(this, animal.name)}
            />;
        });

        return <div className="animallist">{animalsList}</div>;
    }   
}

export default AnimalsList;