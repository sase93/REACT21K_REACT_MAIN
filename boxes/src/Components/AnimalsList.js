import React, { Component } from 'react';
import AnimalCard from './AnimalCard';
import './Animal.css';

import {animals} from './animals';

class AnimalsList extends Component {
    state = {
        animals: animals
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