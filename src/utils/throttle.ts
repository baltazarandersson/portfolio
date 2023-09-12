type Callback = (...args: unknown[]) => void

export const throttle = (callback: Callback, delay = 100): Callback => {
	let timeoutId: ReturnType<typeof setTimeout> | null = null
	let lastCallTime = 0

	return (...args) => {
		// Get the current time in milliseconds.
		const now = Date.now()
		const millisecondsSinceLastCall = now - lastCallTime

		// If enough time has passed since the last function call, call the callback function immediately.
		if (millisecondsSinceLastCall >= delay) {
			callback(...args)
			lastCallTime = now
		}
		// If not enough time has passed since the last callback call, create a new timeout
		// to wait for the remaining time before calling the callback function.
		else {
			// Calculate the remaining time until the next function call.
			const timeRemaining = delay - millisecondsSinceLastCall

			if (timeoutId !== null) {
				clearTimeout(timeoutId)
			}

			timeoutId = setTimeout(() => {
				callback(...args)
				timeoutId = null
				lastCallTime = Date.now()
			}, timeRemaining)
		}
	}
}
