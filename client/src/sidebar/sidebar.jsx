import './sidebar.css';
import {
  PiPants,
  PiTShirt,
  PiSneaker,
  PiHeartStraight,
  PiPlusCircle,
  PiCubeTransparent,
  PiSelectionBackground,
} from 'react-icons/pi';
import { useState } from 'react';
import UploadModal from '../uploadModal/uploadModal';

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
        <div className="all-icons">
          <button>
            <PiTShirt style={{ color: 'white', background: 'black' }} />
          </button>
          <button>
            <PiPants style={{ color: 'white', background: 'black' }} />
          </button>
          <button>
            <PiSneaker style={{ color: 'white', background: 'black' }} />
          </button>

          <button className="like">
            <PiHeartStraight style={{ color: 'white', background: 'black' }} />
          </button>
          <button className="add-item" onClick={handleAddItemClick}>
            {/* onClick open modal/cloudinary widget */}
            <PiPlusCircle style={{ color: 'white', background: 'black' }} />
          </button>
          {isModalOpen && <UploadModal onClose={handleCloseModal} />}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
