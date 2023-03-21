import { Component } from 'react';
import { fetchImages } from '../api/api';
import { SearchBar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {};

  render() {
    return (
      <>
        <SearchBar />
      </>
    );
  }
}
