import { Box } from "../../../Box";
import { ImageItem } from "./GalleryLeftSideBar.style";

export default function GalleryLeftSideBar({ photos, alt, onClick }) {
  return (
    <Box as="ul" display="inline-flex" flexDirection="column" margin="-20px">
      {photos.map((photo) => {
        return (
          <ImageItem key={photo} onClick={() => onClick(photo)}>
            <img src={photo} alt={alt} width="80" height="80" />
          </ImageItem>
        );
      })}
    </Box>
  );
}
