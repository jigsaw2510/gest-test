import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { getDatabase, ref, get } from 'firebase/database';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monumente: [],
      searchfield: '',
    };
  }

  fetchDataFromFirebase = async () => {
    const db = getDatabase();
    const dataRef = ref(db, '/'); // Empty string for root

    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const monumenteArray = Object.values(data); // Convert object to array
        this.setState({ monumente: monumenteArray });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };

  componentDidMount() {
    this.fetchDataFromFirebase();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredmonumente = this.state.monumente.filter((monument) => {
      const lowerCaseSearch = this.state.searchfield.toLowerCase();
      return (
        monument.name.toLowerCase().includes(lowerCaseSearch) ||
        monument.code.toLowerCase().includes(lowerCaseSearch)
      );
    });

    return (
      <div className="tc">
        <h1>Monumente Funerare</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList monumente={filteredmonumente} />
      </div>
    );
  }
}

export default App;
