import { Component } from 'react';
import { fetchImages } from '../../api/api';

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

  onInputChange = event => {
    this.setState({
      querry: event.target.value,
    });
  };

  onFormSubmit = async event => {
    event.preventDefault();

    try {
      const data = await fetchImages(this.state.querry, 1);
      this.props.onNewQuerrySend(data.hits);
    } catch (error) {
      console.log(error);
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
