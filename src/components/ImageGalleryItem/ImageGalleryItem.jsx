import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImgGalItemImgStyled } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  webformatURL,
  tags,
  id,
  largeImageURL,
  onClick,
}) {
  return (
   
      <ImageGalleryItemStyled
        key={id}
        id={id}
        onClick={() => onClick(largeImageURL)}
      >
        <ImgGalItemImgStyled src={webformatURL} alt={tags} loading="lazy" />
      </ImageGalleryItemStyled>
    
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired ,
  id: PropTypes.number.isRequired ,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired ,
}
