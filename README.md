<h1 align="center">Online quiz game with NodeJS + ReactJS</h1>

This project implements a multiplayer online game of questions and answers, using webdockets for real-time communication.

<p align="center">
	<img src="https://user-images.githubusercontent.com/54327441/82605637-9f62cb00-9b8c-11ea-8d3c-971f0a4a26c4.png" height="440" width="308" alt="Demo screen" />
</p>

<h2>Environment requirements</h2>

- [NodeJS](https://nodejs.org) with the [NPM](https://www.npmjs.com) package manager installed.
- Install the [Yarn](https://yarnpkg.com) if you prefer to use it.

<h2>Required NPM packages</h2>

|  Module    | Purpose                                                   |
| -------------------------: | ----------------------------------------- |
| `Express`  | Create a web server to serve statically the game pages    |
| `SocketIO` | Synchronizes events between master and players            |


<h2>Features</h2>

- Round control
- Score control
- Timeout to answer
- Sounds for actions


<h2>Get started</h2>

1. Clone the project: `git clone https://github.com/felipeleite11/super-quiz.git`
2. Execute instalation of dependencies: `npm install` ou `yarn`
3. Execute application: `npm start` ou `yarn start`
4. Open `http://localhost:3000/master` in your browser.
5. Open `http://localhost:3000/test` in another browser window. This will simulate 4 simultaneous players.
6. Set a different name for each player.
7. The list of players should be updated automatically in on all open screens.
8. In the master's window, click the hand pointing to the right, this will get the next question.
9. Answer questions on player's screen before the timeout. You will be notified if the question is correct ✅ or incorrect ❌.
10. Your score will be automatically synchronized across all open screens.


<h2>Game dynamics</h2>

1. The master releases the next question for all players.
2. The timeout starts for all players (each question can have a different timeout)
3. Players who answer the question first, score more.
4. At the end of a round, everyone is notified of the winner.
5. The master can move on to the next round and continue the game.
