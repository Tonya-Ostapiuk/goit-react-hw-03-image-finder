import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({images, onClick}) => (
    <div>
        <ImageGalleryStyled >
            {images.map(({webformatURL, tags, largeImageURL, id}) => 
                (
                    <ImageGalleryItem 
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    onClick={onClick}
                    id={id}
                    key={id}
                    />                 
                )
            )}      
        </ImageGalleryStyled>    
    </div>
)

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}
