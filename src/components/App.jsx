import { Component } from 'react';
import { Grid } from 'react-loader-spinner';
import { fetchImages } from '../api/api';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    page: 2,
    images: [],
    querry: '',
    loading: false,
    totalHits: 0,
  };

  onNewQuerrySend = (images, querry, totalHits) => {
    this.setState({
      page: 2,
      images,
      querry,
      totalHits,
    });
  };

  onLoadMoreBtnClick = async () => {
    this.setState({ loading: true });
    const { querry, page } = this.state;
    const data = await fetchImages(querry, page);
    this.setState(prevState => {
      return {
        page: (prevState.page += 1),
        images: [...prevState.images, ...data.hits],
        loading: false,
      };
    });
  };

  render() {
    const { images, loading, totalHits } = this.state;
    return (
      <>
        <SearchBar onNewQuerrySend={this.onNewQuerrySend} />
        <ImageGallery images={images} />
        {loading && (
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ placeSelf: 'center' }}
            wrapperClass=""
            visible={true}
          />
        )}
        {totalHits > images.length && !loading && (
          <Button onClick={this.onLoadMoreBtnClick} />
        )}
      </>
    );
  }
}
