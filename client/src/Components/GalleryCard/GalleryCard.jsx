import './GalleryCard.css';

function GalleryCard({ key, source }) {
  return (
    <>
      <img className="gallery-item" src={source} key={key}></img>
    </>
  );
}

export default GalleryCard;
