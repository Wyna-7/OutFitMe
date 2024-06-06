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
        <h1>OutFitMe</h1>
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
          <PiPlusCircle />
        </button>
      </div>
    </>
  );
}

export default Sidebar;
