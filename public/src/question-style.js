function getBackgroundColorByDificulty(dificulty) {
	switch(dificulty) {
		case 1: return '#66bb6a'
		case 2: return '#ffb74d'
		case 3: return '#f44336'
		default: return '#fff'
	}
}

const shadow = css`
	box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
`

const hoverShadow = css`
	box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2);
`

const QuestionContainer = styled.div.attrs({
	className: 'question-container animate__animated'
})`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 20px;
	width: 100%;
`

const Question = styled.div.attrs({
	className: 'question animate__animated'
})`
	font-size: 18px;
	font-weight: 400;
	color: #fff;
	font-family: 'Titillium Web', Arial, Helvetica, sans-serif, sans-serif;
	padding: 14px 18px;
	margin: 20px 0;
`

const WaitMessage = styled.div.attrs({
	className: 'wait-message animate__animated'
})`
	font-size: 26px;
	color: #fff;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 14px 30px 0;
`

const AlternativesContainer = styled.div.attrs({
	className: 'alternatives-container'
})`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;

	button:nth-child(1) {
		animation-delay: 200ms !important;
	}

	button:nth-child(2) {
		animation-delay: 400ms !important;
	}

	button:nth-child(3) {
		animation-delay: 600ms !important;
	}

	button:nth-child(4) {
		animation-delay: 800ms !important;
	}
`

const Timeover = styled.span`
	color: #fff;
	font-size: 40px;
	text-align: center;
	width: 100%;
`

const Button = styled.button.attrs({
	className: 'animate__animated'
})`
	border-radius: 8px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;
	min-height: 80px;
	transition: box-shadow 0.3s;
	font-size: ${props => props.type === 'emoji' ? '40px' : '14px' };
	outline: 0;
	font-weight: 700;
	background-color: ${props => props.highlightCorrectAlternative ? '#66bb6a' : '#fff'};
	${shadow}

	&:hover {
		${hoverShadow}
	}

	&.incorrect {
		background-color: #f44336;
		color: #fff;
	}

	&.correct {
		background-color: #66bb6a;
		color: #fff;
	}

	.emoji {
		font-size: 40px;
		margin-bottom: 20px;
	}

	.bold {
		font-weight: 700;
		font-size: 16px;
	}
`

const DisableStartGame = styled.h1`
	text-align: center;
	width: 100%;
	max-width: 254px;
	color: #fff;
	font-size: 20px;
	background-color: #ffb74d;
	padding: 10px;
	border-radius: 8px;
	margin-top: 30px;
`