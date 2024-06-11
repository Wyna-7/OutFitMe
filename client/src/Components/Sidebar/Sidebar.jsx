import './Sidebar.css';
import {
  PiPants,
  PiTShirt,
  PiSneaker,
  PiHeartStraight,
  PiPlusCircle,
} from 'react-icons/pi';
import { useState } from 'react';
import UploadModal from '../UploadModal/UploadModal';

function Sidebar() {
  //TODO: Add functionality to see (1) galleries by item type (2) liked outfits

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="sidebar-nav">
        <h1 className="sidebar-title">OutFitMe</h1>
        <button className="sidebar-icon">
          <PiTShirt />
        </button>
        <button className="sidebar-icon">
          <PiPants />
        </button>
        <button className="sidebar-icon">
          <PiSneaker />
        </button>

        <button className="like sidebar-icon">
          <PiHeartStraight />
        </button>
        <button className="add-item sidebar-icon" onClick={handleAddItemClick}>
          {/* onClick open modal/cloudinary widget */}
          <PiPlusCircle />
        </button>
        {isModalOpen && <UploadModal onClose={handleCloseModal} />}
      </div>
    </>
  );
}

export default Sidebar;
