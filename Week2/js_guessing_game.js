function do_game() {
	alert('welcome to the game....')
	var rnum = Math.floor(Math.random() * 100 + 1) // a random number from 1 to 100
	console.log('Number I have in mind = ' + rnum)
	check_guess(rnum)
}

function check_guess(rnum) {
	var correctguess = false
	var attempts = 0
	var data
	while (!correctguess) {
		var guess = prompt('what is the number I am thinking?')
		attempts++
		console.log('attempt = ' + attempts)
		console.log('you entered ' + guess)
		
		data = parseInt(guess, 10)
		console.log(data)

		// check if the input is a number
		if ( Number.isNaN(data) ) {
			alert('please enter an integer')
		} else {
			if ( data < 1 || data > 100) {
				alert('your guess is out of range')
			} else {
				if ( data == rnum) {
					alert('Correct guess. You took ' + attempts + ' attempts')
					correctguess = true
				} else if ( data > rnum) {
					alert('your guess is too large')
				} else if ( data < rnum) {
					alert('your guess is too small')
				}
			}
		}
	}
}