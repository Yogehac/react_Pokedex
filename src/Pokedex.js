import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './styles/Pokedex.css';

class Pokedex extends Component {
	static defaultProps = {
		pokemons: [
			{ id: 4, name: 'Charmander', type: 'fire', experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', experience: 178 }
		]
	};
	render() {
		return (
			<div className="dex">
				{this.props.pokemons.map((p, i) => {
					return <Pokecard key={i} pokemon={p} />;
				})}
			</div>
		);
	}
}

export default Pokedex;
