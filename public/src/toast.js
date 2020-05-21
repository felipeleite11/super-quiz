function showToast(text, duration = 2200, backgroundColor = '#242424', timeout = 0) {
	const toast = Toastify({
		text,
		duration, 
		newWindow: true,
		gravity: 'top',
		position: 'center',
		close: true,
		backgroundColor
	})

	setTimeout(() => toast.showToast(), timeout)
}