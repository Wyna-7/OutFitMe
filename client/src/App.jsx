import './App.css';
import Sidebar from './sidebar/sidebar';
import DisplayContainer from './displayContainer';

function App() {
  return (
    <>
      <div className="app-container">
        {/*
        The app will have a static navbar on top with the app name.
        When clicking the app name, the side bar will open:
          - button to see all tops & delete pictures
          - button to see all bottoms & delete pictures
          - button to see all shoes & delete pictures
          - button to see all liked outfits
          !!MVP FEATURE button to add a new clothing item MVP FEATURE!!
            This button should open a modal/cloudinary widget to upload a new picture
            & select it's required metadata. Pic will go to cloudinary, and its returned URL
            and metadata will go to mongoDB:
              - type of clothing item (top, bottom, shoe)
              - temperature range (allow to select multiple):
                  - cold, less than 10ºC
                  - cool, 10ºC-18ºC
                  - warm, 18ºC-25ºC
                  - hot, more than 25ºC
              - apt for rain or not (true/false)
        */}
        <div className="sidebar">
          <Sidebar />
        </div>
        {/* 
        Should this be named Dashboard instead? IDK
        Main app container will have a static weather display, and
        a dynamic display for:
          !!MVP FEATURE randomized outfit MVP FEATURE!!
          - see tops gallery
          - see bottoms gallery
          - see shoes gallery
          - see liked outfits gallery
        */}
        <div className="display-container">
          <DisplayContainer />
        </div>
      </div>
    </>
  );
}

export default App;
