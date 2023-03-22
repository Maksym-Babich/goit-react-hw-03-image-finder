import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = function ({ images }) {
  return (
    <Gallery>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </Gallery>
  );
};
