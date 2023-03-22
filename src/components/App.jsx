import { Component } from 'react';
import { fetchImages } from '../api/api';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    images: [],
  };

  onNewQuerrySend = images => {
    this.setState({
      page: 1,
      images,
    });
  };

  render() {
    const { page, images } = this.state;
    return (
      <>
        <SearchBar onNewQuerrySend={this.onNewQuerrySend} />
        <ImageGallery images={images} />
      </>
    );
  }
}
