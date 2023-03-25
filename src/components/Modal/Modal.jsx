import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContent, Image } from 'components/Modal/Modal.styled';

export class Modal extends Component {
  PropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onModalMount);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalMount);
  }

  onModalMount = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalContent>
          <Image alt={alt} src={src} />
        </ModalContent>
      </Overlay>,
      document.querySelector('#modal-root')
    );
  }
}
