import { useLocation, useParams } from "react-router-dom";
import { Box } from "../../Box";
import { GetDescriptionOfProduct } from "../../Api/Api";
import GalleryLeftSideBar from "./GalleryLeftSideBar/GalleryLeftSideBar";
import RightSideBar from "./RightSidebar/RightSideBar";
import { useState, useEffect } from "react";
import { ProductContext } from "../../tools/Context/Context";
import { Return } from "./ProductDescription.style";
import { TiArrowBackOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import Loading from "../../Loading/Loading";

export default function ProductDescription() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { error, loading, data } = GetDescriptionOfProduct(id);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!data) {
      return;
    }
    setImage(data.product.gallery[0]);
  }, [data, dispatch]);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const { brand, gallery } = data.product;

  return (
    <Box>
      <Box className="container">
        <Return to={location?.state?.from ?? "./"}>
          <TiArrowBackOutline />
          Return
        </Return>

        <Box display="flex">
          <GalleryLeftSideBar photos={gallery} alt={brand} onClick={setImage} />

          <ProductContext.Provider value={data?.product}>
            <RightSideBar image={image} alt={brand} />
          </ProductContext.Provider>
        </Box>
      </Box>
    </Box>
  );
}
