import './App.css';
import Sidebar from './sidebar/sidebar';
import DisplayContainer from './displayContainer';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="display-container">
          <DisplayContainer />
        </div>
      </div>
    </>
  );
}

export default App;
