const RoundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	padding: 14px 0;

	button {
		border-radius: 8px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: none;
		cursor: pointer;
		height: 50px;
		padding-bottom: 18px;
		transition: box-shadow 0.3s;
		font-size: ${props => props.type === 'emoji' ? '40px' : '14px' };
		outline: 0;
		font-size: 40px;
		${shadow}
	}

	> span {
		font-size: 24px;
		margin: 0 14px;
		font-weight: 600;
		color: #fff;
	}
`