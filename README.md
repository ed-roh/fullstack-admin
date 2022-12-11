# Hello!

This is a Full-Stack admin panel that I created on my YouTube channel: [Video](https://www.youtube.com/watch?v=0cPCMIuDk2I)

# Installation

- Install MongoDB onto your computer: [Installation Instructions](https://www.mongodb.com/docs/manual/administration/install-community/)
- Add a .env file to the server directory. Inside add:

```env
MONGO_URL = "localhost:27017"
PORT=3000
```

- Uncomment the part in index.js that talks about importing data. After the first run of the server, make sure to re-comment this.
- Install all the dependencies using:

```zsh
npm i
```

- Move into your client directory and install all of their dependencies:

```zsh
npm i
```

- Open up two terminals and run these commands:

```zsh
cd server
npm start
```

```zsh
cd client
npm start
```

- This should automatically open react, it may take a while to load...
