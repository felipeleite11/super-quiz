const express = require('express')

const app = express()

const http = require('http')

const server = http.createServer(app)

const socketIO = require('socket.io')

const io = socketIO.listen(server)

server.listen(3000, () => console.log('Executing in port 3000'))

app.use(express.static(__dirname + '/public'))

app.get('/player', (req, res) => res.sendFile(__dirname + '/public/player.html'))

app.get('/master', (req, res) => res.sendFile(__dirname + '/public/master.html'))

app.get('/test', (req, res) => res.sendFile(__dirname + '/public/index.html'))

const questions = require('./questions')

let master
let players = []
let correctRepliesCount = -1
let questionIndex = -1
let round = 0
let repliesCount = 0

function getNextQuestion() {
	questionIndex++

	return questionIndex <= questions[round].length - 1 ? questions[round][questionIndex] : null
}

function getCurrentQuestion() {
	return questions[round][questionIndex]
}

function sortPlayersByScore() {
	players.sort(function(a, b) {
		if(a.score < b.score) {
			return 1
		}

		if(a.score > b.score) {
			return -1
		}

		return 0
	})
}

function getWinnerPlayer() {
	sortPlayersByScore()

	const maxScore = players[0].score

	return players.filter(player => player.score === maxScore)
}

function clearQuestions() {
	questionIndex = -1
}

function clearPlayers() {
	players = []
}

function getPlayerWithoutName() {
	const playersWithouName = players.filter(player => !player.name)
	return playersWithouName
}

io.on('connection', socket => {
	socket.on('im-player', name => {
		players.push({ socket: socket.id, name: name.toUpperCase(), score: 0 })

		io.emit('players', players)
	
		if(master && !getPlayerWithoutName().length) {
			io.to(master.socket).emit('enable-start-game')
		}
	})

	socket.on('im-master', () => {
		master = { socket: socket.id }

		clearQuestions()
		clearPlayers()

		io.emit('master')
		io.to(socket.id).emit('set-round-limit', questions.length - 1)
	})

	socket.on('answer', reply => {
		const currentQuestion = getCurrentQuestion()

		if(!currentQuestion) {
			return
		}

		const correctAlternative = currentQuestion.alternatives.find(a => a.correct)
		const isCorrect = reply === correctAlternative.id
		const player = players.find(player => player.socket === socket.id)
		
		repliesCount++

		io.to(master.socket).emit('reply', { 
			player,
			isCorrect
		})

		if(isCorrect) {
			players = players.map(player => {
				if(player.socket === socket.id) {
					return {
						...player,
						score: player.score + (correctRepliesCount < 5 ? 10 - correctRepliesCount : 0)
					}
				}

				return player
			})

			const updatedPlayer = players.find(player => player.socket === socket.id)

			socket.emit('correct', updatedPlayer)

			sortPlayersByScore()

			io.emit('players', players, updatedPlayer)

			correctRepliesCount++

			if(repliesCount === players.length) {
				const allCorrect = correctRepliesCount === repliesCount

				io.to(master.socket).emit(allCorrect ? 'all-correct' : 'already-answered')
			}

			return
		}

		if(repliesCount === players.length) {
			io.to(master.socket).emit('already-answered')
		}

		socket.emit('incorrect', player)

		io.emit('players', players, player)
	})

	socket.on('get-next', () => {
		console.log('Zerando contador de respostas...')
		correctRepliesCount = 0
		repliesCount = 0

		const next = getNextQuestion()

		if(!next) {
			console.log('FIM DO JOGO!')
			correctRepliesCount = -1
			questionIndex = -1
			io.emit('game-over', getWinnerPlayer())
			return
		}

		io.emit('next', next)
	})

	socket.on('test-connection', () => {
		console.log('Teste de conexão!')

		io.emit('test-connection')
	})

	socket.on('set-round', selectedRound => {
		round = selectedRound
	})

	socket.on('disconnect', () => {
		if(master && socket.id === master.socket) {
			io.emit('master-offline')
			master = null
			return
		}

		players = players.filter(player => player.socket !== socket.id)
	})
})
