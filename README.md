# nimblecode

Nimblecode is a code type-racing game to improve your speed and accuracy as a coder.  You can either race against the clock, or show off your skills in live multiplayer with your friends in a private or public game.

Nimblecode was started by four software engineers in Los Angeles with a vision of building a game that was both fun and educational. Play today at [nimblecode.io](http://nimblecode.io).

## Table of Contents
- [Getting Started](#getting-started)
- [Running the tests](#running-the-tests)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Our Team](#our-team)

## Getting Started

Here is a quick step by step if you'd like to contribute to our project

#### Prerequisites

You must have node installed and have a MySQL db to connect to

The config file (**config.js**) to connect to your db should be placed in **server/db/config**

**Example of config.js layout:**
```
module.exports = {
  db_host: 'HOST_IP',
  db_user: 'DB_USER',
  db_password: 'DB_PASSWORD',
  db_name: 'DB_NAME',
  charset: 'utf8'
};
```

#### Installing

clone the repo where you would like

```
git clone https://github.com/nimblecode/nimblecode.git
```
cd into directory
```
cd nimblecode
```
run npm install
```
npm install
```
We often use nodemon to run node and it will relaunch node when changes are saved.
To get nodemon
```
npm install nodemon -g
```
start the server!
```
npm start
```
default port on the project is 8080 as compliance with AWS
it should console.log
```
listening at http://localhost:8080/
```
## Running the tests
We have a few tests for server side, please feel free to add more.

Our config is setup to run the test easily with npm.
```
npm test
```

## Tech Stack

* React
* Redux
* Node.js
* Express
* MySQL
* Socket.io
* Ace Code Editor

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

##Our Team

[<img src="./client/assets/mark-profile.jpg" width="125" height="125" align="right" />](https://github.com/marksanghoonkim)
###Mark Kim

Mark is interested in using software to build useful products. He believes that empathy is key in designing great products, in collaborating with others, and in growing as a developer, as a leader, and as a person. On nimblecode, Mark served as the product owner, supporting the team on both the front and back end.  He led the implementation of Redux and focused on the Multiplayer gameplay.

[GitHub](https://github.com/marksanghoonkim) | [Website](http://marksanghoonkim.com)

[<img src="./client/assets/rick-profile.jpg" width="125" height="125" align="right" />](https://github.com/rickyeh)
###Rick Yeh

Rick loves traveling the world and eating awesome food everywhere he goes. When he's not being an amateur foodie, he's developing his React skills, whipping up components and containers on his free time.  On nimblecode, Rick architected the React front end in design and implementation.  He focused his efforts on the Singleplayer mode and led efforts to improve overall user experience.

[GitHub](https://github.com/rickyeh) | [Website](http://rickyeh.com)

[<img src="./client/assets/nick-profile.jpg" width="125" height="125" align="right" />](https://github.com/kiritsuzu)
###Nick Der

Nick is a software engineer focused on combining creative and technical skill to invent fun and beneficial products. He is an avid enthusiast of games, film, narrative theory, virtual reality, sushi, and dogs.  On nimblecode, Nick led the user authentication system and focused on improving the multiplayer experience, implementing public and private rooms. 

[GitHub](https://github.com/kiritsuzu)

[<img src="./client/assets/jordan-profile.jpg" width="125" height="125" align="right" />](https://github.com/jordanallen98)
###Jordan Allen

Jordan is a software engineer who owned his own business at 21. He is an avid, self-taught guitarist, who has owned and worked on a few project cars(0-60 in 4 sec). He also loves traveling around the world.  On nimblecode, Jordan led the back-end, setting up the AWS EC2 and MySQL database. He focused his efforts on back-end routing, application testing, and deployment.

[GitHub](https://github.com/jordanallen98)
