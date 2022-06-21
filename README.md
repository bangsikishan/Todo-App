# Todo App

Todo App is a server-side application to add to-do lists.

## Installation

To use this project, you need to first download it into a folder. You also need Node.js downloaded and installed on your pc to run it.

- You can download Node.js from this website: `https://nodejs.org/en/download/`

Also, you need a local MongoDB database to store todo lists and retrieve them later. However, you can change the code in the `server.js` file to connect to the online MongoDB Atlas database.

- To download MongoDB locally, go to `https://www.mongodb.com/try/download/community`

You might also need MongoDB Shell to test your database, which you can get from here: `https://www.mongodb.com/try/download/shell`.

Alternatively, you can use MongoDB Compass GUI which should come pre-installed with the community version of the database.


## Usage

After installing the necessary softwares, you can now install the dependencies by going to the folder where the files are contained and running the following command in the terminal.

```powershell
npm install
```
- After installation, enter `node server` to run the server.js file. This will start the server.
- If everything is running, you can visit by going to  `localhost:<YOUR_PORT_NUMBER>` in your browser.

# Notes

***Do not forget to create a `.env` file, and enter port and database name inside it.*** 

***Example:***

```
PORT=YOUR_PORT_NUMBER
DATABASE=YOUR_DATABASE_NAME
```

***You can type the port number and database name directly into the code, but it is not recommended.***

