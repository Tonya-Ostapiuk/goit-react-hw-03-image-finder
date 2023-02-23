import { ButtonStyle } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({handleClick}) => {
    return(
        <ButtonStyle type="button" onClick={handleClick}>Load more</ButtonStyle>
    )
};

Button.propTypes = {
    handleClick: PropTypes.func,
}