# OutFitMe

Your new digital closet & weather appropriate outfit generator.
OutFitMe is an application that allows users to upload pictures of their clothes, tagging them according to type and optimal weather use (temperature range, rain appropriate or not, type of item).
The users can open the app and click a button to generate an outfit with clothes appropriate for the day’s forecast. In the same display as the outfit randomizer, there is a live weather display for the user's location. 
Additionally, the sidebar clothing icons display galleries with all items of that specific type that the user has uploaded.

![image](https://github.com/Wyna-7/OutFitMe/assets/155622909/823fd043-ca08-4d0c-af53-a23319017d16)

![image](https://github.com/Wyna-7/OutFitMe/assets/155622909/0fa264aa-a9b5-4e22-b833-113674ec9abb)

![image](https://github.com/Wyna-7/OutFitMe/assets/155622909/8fcb612c-61b8-4af0-935c-c3ea85998aa4)

![image](https://github.com/Wyna-7/OutFitMe/assets/155622909/83b8957b-5d23-431f-8153-b82d88086a9e)

![image](https://github.com/Wyna-7/OutFitMe/assets/155622909/174949eb-b4f0-47cd-924e-ee84ccf1953d)


## Getting started

In order to get OutFitMe to work, there are two external services that need to be connected to the app. You will need to gather their information and store it in a .env file:

### OpenWeatherMap API 
- Go to https://openweathermap.org/ and get a free membership.
- Once logged in, locate your username drop down in the navbar, and navigate to "My API Keys".
- In "My API Keys" make sure you have an **Active** key, and save its **Key** and **Name** to add them to the .env file.
  
### Cloudinary 
- Go to https://cloudinary.com/ and get a free membership.
- Once logged in, locate the "Assets" icon at the top of the sidebar and click on it.
- Here you can create a new folder to upload pictures to, name it however you want and save the **Folder name** to add it to the .env file.
- Now locate the settings icon at the bottom of the sidebar, and click on it.
- In "Settings", another sidebar will become visible. Click on "API Keys" and save your **Cloud name** to add it to the .env file.
- Make sure you have an **Active** key, and save its **API Key** and **API Secret** to add them to the .env file.
- In "Settings", click on "Upload Presets" and add a new preset with Signing mode **Unsigned**. Leave all other options as is and save it, then save its **Name** to add it to the .env file.
    
Once you have collected all necessary information from both services, create a .env file in the client folder, and add the information like this:
```
VITE_CLOUD_NAME=placeholder
VITE_UPLOAD_PRESET=placeholder
VITE_CLOUDINARY_FOLDER=placeholder
VITE_CLOUDINARY_API_KEY=placeholder
VITE_CLOUDINARY_API_SECRET=placeholder

VITE_OPENWEATHER_API_NAME=placeholder
VITE_OPENWEATHER_API_KEY=placeholder
```

Now .env file is complete, and MongoDB is running on your computer, navigate to the *server* folder and run this command:
```
nodemon
```
You should see the following lines in your terminal:
```
🚀 Server running on 3000
🎃 Succesfully connected to outfitme on port 27017!
```
Then, navigate to the *client* folder and run this command:
```
npm run dev
```
OutFitMe is now running on your computer! Upload some clothing items, and start generating your outfits for the day :)

## Tech stack
- Front End: [React](https://react.dev/) & [Vite](https://vitejs.dev/)
- Back End: [Node.js](https://nodejs.org/en) & [Koa](https://koajs.com/) 
- Databases: [MongoDB](https://www.mongodb.com/) with [mongoose](https://mongoosejs.com/) & [Cloudinary](https://cloudinary.com/)
- Styling: [React-icons](https://react-icons.github.io/react-icons/) 
- APIs: [OpenWeather](https://openweathermap.org/)

## Future features
- Save full outfit as favorite, make all favorite outfits visible in a gallery by clicking the heart icon. Outfits should have a delete option from their gallery.
- Delete clothing items from gallery view (this should remove them form cloudinary and db simultaneously).
- Edit clothing item data from gallery view (temperature range, rain appropriate or not, type of item).
