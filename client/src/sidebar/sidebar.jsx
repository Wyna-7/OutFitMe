import './sidebar.css';
import {
  PiPants,
  PiTShirt,
  PiSneaker,
  PiHeartStraight,
  PiPlusCircle,
} from 'react-icons/pi';
import { useState } from 'react';
import UploadModal from './uploadModal';

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="sidebar">
        <h1>OutFitMe</h1> {/* This will just be static */}
        <div className="clothing-sections">
          <button>
            <PiTShirt />
          </button>
          <button>
            <PiPants />
          </button>
          <button>
            <PiSneaker />
          </button>
        </div>
        <button className="like">
          <PiHeartStraight />
        </button>
        <button className="add-item" onClick={handleAddItemClick}>
          {/* onClick open modal/cloudinary widget */}
          <PiPlusCircle />
        </button>
        {isModalOpen && <UploadModal onClose={handleCloseModal} />}
      </div>
    </>
  );
}

export default Sidebar;
