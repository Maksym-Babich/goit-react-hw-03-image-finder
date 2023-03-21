import { Component } from 'react';
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

  render() {
    return (
      <Header>
        <Form onSubmit={this.props.onFormSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>
          <Input
            onChange={this.onInputChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.querry}
          />
        </Form>
      </Header>
    );
  }
}
