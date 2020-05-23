const PlayerList = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-top: 30px;
	padding: 18px;

	h1 {
		font-size: 20px;
		color: #fff;
		text-align: center;
	}

	p {
		font-size: 12px;
		color: #fff;
		font-style: italic;
		text-align: center;
	}
`

const PlayerListItem = styled.div.attrs({
	className: 'animate__animated animate__faster'
})`
	display: flex;
	justify-content: space-between;
	padding: 10px 16px;
	background-color: #fff;
    border-radius: 6px;
    font-size: 14px;
    color: #242424;
    font-weight: 600;
	margin-bottom: 6px;
	width: calc(100% - 32px);

	span:first-child {
		font-weight: 700;
	}
`