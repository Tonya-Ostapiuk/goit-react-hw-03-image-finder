import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { OverlayStyled, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onCloseModalOnBackdrop = evt => {
    if (evt.targat === evt.currentTerget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <OverlayStyled onClick={this.onCloseModalOnBackdrop}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </OverlayStyled>,
      modalRoot
    );
  }
}

Modal.propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
}
