import React, { Component } from 'react';
import './styles/Pokecard.css';

class Pokecard extends Component {
	static defaultProps = {
		pokemon: {
			id: 4,
			name: 'Charmander',
			type: 'fire',
			experience: 62
		}
	};
	fullnum(n) {
		let num = n.toString();
		if (num.length < 3) {
			num = num.length == 1 ? '00' + num : '0' + num;
			return num;
		}
		return num;
	}
	render() {
		// console.log(this.props.d);
		const { id, type, name, experience } = this.props.pokemon;
		let code = (
			<div>
				<h3>{name}</h3>
				<img
					className="card-img"
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.fullnum(id)}.png`}
					alt={name}
				/>
				<p>
					Type : {type}
					<br />Exp : {experience}
				</p>
			</div>
		);
		return <div className="card">{code}</div>;
	}
}

export default Pokecard;
