import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Image,
} from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  PropTypes = {
    image: PropTypes.object.isRequired,
    key: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen };
    });
  };

  render() {
    const { image } = this.props;
    return (
      <Item>
        <Image
          alt={image.tags}
          src={image.webformatURL}
          onClick={this.toggleModal}
        />
        {this.state.modalOpen && (
          <Modal
            alt={image.tags}
            src={image.largeImageURL}
            toggleModal={this.toggleModal}
          />
        )}
      </Item>
    );
  }
}
