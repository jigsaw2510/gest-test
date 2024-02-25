import React, { Component } from 'react';
import CardList from './CardList';
import { monumente } from './monumente';
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			monumente: monumente,
			searchfield:''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render() {
		const filteredmonumente = this.state.monumente.filter(monument => {
		  const lowerCaseSearch = this.state.searchfield.toLowerCase();
		  return (
		    monument.name.toLowerCase().includes(lowerCaseSearch) ||
		    monument.code.toLowerCase().includes(lowerCaseSearch)
		  );
		});
		return (
		<div className='tc'>
			<h1>Monumente Funerare</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList monumente={filteredmonumente}/>
		</div>
		);
	}
}

export default App;