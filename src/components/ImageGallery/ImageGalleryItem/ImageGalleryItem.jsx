import {
  Item,
  Image,
} from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = function ({ image }) {
  return (
    <Item>
      <Image alt={image.tags} src={image.webformatURL} />
    </Item>
  );
};
