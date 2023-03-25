import { Component } from 'react';
import { fetchImages } from '../../api/api';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import {
  Header,
  Form,
  SearchButton,
  SearchButtonLabel,
  Input,
} from 'components/Searchbar/Searchbar.styled';

export class SearchBar extends Component {
  state = {
    querry: '',
  };

  PropTypes = {
    onNewQuerrySend: PropTypes.func.isRequired,
  };

  onInputChange = event => {
    this.setState({
      querry: event.target.value,
    });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const querry = this.state.querry.trim();
    if (querry === '') {
      Notiflix.Notify.failure('Your querry can not be empty');
      return;
    }

    try {
      const data = await fetchImages(querry, 1);
      if (data.hits.length === 0) {
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      this.props.onNewQuerrySend(data.hits, querry, data.totalHits);
      Notiflix.Notify.success(`Seccess, we found ${data.totalHits} images`);
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Something went wrong, please, reload the page');
    }
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onFormSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>
          <Input
            onChange={this.onInputChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.querry}
          />
        </Form>
      </Header>
    );
  }
}
