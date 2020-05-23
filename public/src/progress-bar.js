const Bar = styled.div.attrs({
	className: 'progress-bar'
})`
	width: 80%;
	background-color: #ddd;
	border-radius: 10px;
	margin-top: 20px;
`

const Progress = styled.div`
	width: 0%;
	height: 10px;
	background-color: #ffb74d;
	border-radius: 10px;
`

class ProgressBar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { progress } = this.props

		return (
			<Bar className={progress >= 100 ? 'animate__animated animate__shakeY' : ''}>
				<Progress style={{ width: `${progress}%` }} />
			</Bar>
		)
	}
}