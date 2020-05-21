const QuestionControl = styled.div`
	display: flex;
	justify-content: center;

	button {
		border-radius: 8px;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		cursor: pointer;
		height: 80px;
		width: 80px;
		transition: box-shadow 0.3s;
		font-size: 40px;
		${shadow}
	
		&:hover {
			${hoverShadow}
		}
	}
`