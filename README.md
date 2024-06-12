# OutFitMe
Digital closet & outfit generator

## A short, clear description:

OutFitMe is an application that allows users to upload pictures of their clothes, tagging them according to type and optimal weather use (temperature range, rain appropriate or not, type of item).
The users can open the app and click a button to generate an outfit with clothes appropriate for the day’s forecast. In the same display as the outfit randomizer, there is a live weather display for the user's location. 
Additionally, the sidebar clothing icons display galleries with all items of that specific type that the user has uploaded.

## How to get the app to work:

In order to get OutFitMe to work, there are two external services that need to be connected to the app. You will need to gather their information and store it in a .env file:

### OpenWeatherMap API 
- Go to https://openweathermap.org/ and get a free membership.
- Once logged in, locate your username drop down in the navbar, and navigate to "My API Keys".
- In "My API Keys" make sure you have an **Active** key, and save its **Key** and **Name**.
  
### Cloudinary 
- Go to https://cloudinary.com/ and get a free membership.
- Once logged in, locate the "Assets" icon at the top of the sidebar and click on it.
- Here you can create a new folder to upload pictures to, name it however you want and save the **Folder name**.
- Now locate the settings icon at the bottom of the sidebar, and click on it.
- In "Settings", another sidebar will become visible. Click on "API Keys" and save your **Cloud name**
- Make sure you have an **Active** key, and save its **API Key** and **API Secret**.
- In "Settings", click on "Upload Presets" and add a new preset with Signing mode **Unsigned**. Leave all other options as is and save it, then save its **Name**
    
Once you have collected all necessary information from both services, create a .env file in the client folder, and add the informaiton like this:

VITE_CLOUD_NAME=placeholder
VITE_UPLOAD_PRESET=placeholder
VITE_CLOUDINARY_FOLDER=placeholder
VITE_CLOUDINARY_API_KEY=placeholder
VITE_CLOUDINARY_API_SECRET=placeholder

VITE_OPENWEATHER_API_NAME=placeholder
VITE_OPENWEATHER_API_KEY=placeholder
  

