const styled = window.styled
const css = styled.css

const Container = styled.div.attrs({
	className: 'animate__animated animate__bounce animate__fast'
})`
	min-height: 100vh;
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Titillium Web', Arial, Helvetica, sans-serif, sans-serif;
`
