const Header = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding-bottom: 10px;
`

const AppName = styled.div.attrs({
	className: 'animate__animated animate__rubberBand'
})`
	margin: 12px 0;

	img {
		width: 74px;
	}
`

const RoomName = styled.h2`
	color: #fff;

	span:first-child {
		font-size: 18px;
	}

	span:last-child {
		font-size: 12px;
		margin-left: 8px;
	}
`

const PlayerName = styled.h3`
	color: #fff;
	font-size: 14px;
	padding-top: 10px;
	
	input {
		padding: 6px;
		border-radius: 6px;
		border: none;
		outline: 0;
	}

	button {
		border-radius: 8px;
		padding: 6px;
		margin-left: 4px;
		border: none;
		cursor: pointer;
		transition: box-shadow 0.3s;
		font-size: ${props => props.type === 'emoji' ? '40px' : '14px' };
		outline: 0;

		&:hover {
			opacity: 0.8;
		}
	}
`

const GameDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	h2, h3 {
		margin: 0;
		font-family: 'Raleway', Arial, Helvetica, sans-serif, sans-serif;
	}
`
