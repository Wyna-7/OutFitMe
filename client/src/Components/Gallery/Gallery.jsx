import './Gallery.css';
import GalleryCard from '../GalleryCard/GalleryCard';
import { useEffect, useState } from 'react';
import { getAllItemsFromCat } from '../../Services/apiService';

function Gallery({ itemType }) {
  const [itemGallery, setItemGallery] = useState([]);

  useEffect(() => {
    getAllItemsFromCat(itemType).then((res) => {
      console.log(res);
      setItemGallery(res.map((item) => item));
    });
  }, [itemType]);

  return (
    <>
      <div className="gallery">
        <h1 className="gallery-title">{itemType.toUpperCase()}</h1>
        <div className="gallery-items">
          {itemGallery.map((item) => (
            <GalleryCard key={item._id} source={item.imgURL} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
