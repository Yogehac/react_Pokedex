import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './styles/Pokegame.css';

class Pokegame extends Component {
	static defaultProps = {
		pokees: [
			{ id: 4, name: 'Charmander', type: 'fire', experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', experience: 65 }
		]
	};

	exp(pokeTeam) {
		let val = 0;
		for (let i in pokeTeam) {
			val += pokeTeam[i].experience;
		}
		return val;
	}

	idx(n) {
		return Math.floor(Math.random() * n);
	}

	splitTeam(a) {
		let b = [];
		for (let i in '....') {
			b.push(...a.splice(this.idx(a.length), 1));
		}
		return [ a, b ];
	}

	render() {
		let [ a, b ] = this.splitTeam(this.props.pokees);
		let [ aScore, bScore ] = [ this.exp(a), this.exp(b) ];
		return (
			<div>
				<div className={aScore > bScore ? 'won' : 'lost'}>
					<h2 className="head">Team power = {aScore}</h2>
					<Pokedex pokemons={a} />
				</div>
				<div className={aScore < bScore ? 'won' : 'lost'}>
					<h2 className="head">Team power = {bScore}</h2>
					<Pokedex pokemons={b} />
				</div>
			</div>
		);
	}
}

export default Pokegame;
