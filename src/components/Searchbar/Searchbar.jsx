import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { FaAngellist } from 'react-icons/fa';

import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormBtnStyled,
  SearchFormInputStyled,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    image: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ isLoading: true });
    if (this.state.image.trim() === '') {
      return toast.warn('Enter your request');
    }
    this.props.onSubmit(this.state.image);
    this.setState({ image: '' });
  };

  handleChange = evt => {
    this.setState({ image: evt.target.value.toLowerCase() });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchFormStyled onSubmit={this.handleSubmit}>
          <SearchFormBtnStyled type="submit" >
          <FaAngellist color='white' size='20px'/>
          </SearchFormBtnStyled>

          <SearchFormInputStyled
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}


Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
