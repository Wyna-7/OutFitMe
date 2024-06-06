import './sidebar.css';
import {
  PiPants,
  PiTShirt,
  PiSneaker,
  PiHeartStraight,
  PiPlusCircle,
} from 'react-icons/pi';

function Sidebar() {
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
        <button className="add-item">
          {' '}
          {/* onClick open modal/cloudinary widget */}
          <PiPlusCircle />
        </button>
      </div>
    </>
  );
}

export default Sidebar;
