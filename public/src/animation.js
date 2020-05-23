function applyTempAnimation(target, animationClassNames, timeout = 1000) {
	const classes = animationClassNames.split(' ')

	target.classList.add(...classes)

	setTimeout(() => target.classList.remove(...classes), timeout)
}