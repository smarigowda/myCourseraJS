var target
var guess_input_text
var guess_input
var finished = false
var guesses = 0

function do_game() {
	var random_number = Math.random() * 100
	var random_number_integer = Math.floor(random_number)
	target = random_number_integer + 1
	console.log(target)

	while (!finished) {
		guess_input_text = prompt("I am thinking of a number in the range 1 to 100\n\nWhat is the number?")
		guess_input = parseInt(guess_input_text)
		console.log('your guess = ' + guess_input)
		guesses += 1
		finished = check_guess()
	}
}


// function do_game() {
// 	alert('welcome to the game....')
// 	var rnum = Math.floor(Math.random() * 100 + 1) // a random number from 1 to 100
// 	console.log('Number I have in mind = ' + rnum)
// 	check_guess(rnum)
// }

function check_guess() {
	console.log(guess_input)
	console.log(target)
	if (isNaN(guess_input)) {
		prompt("You have not entered a number\n Please enter a number in the range 1 to 100")
		return false
	}

	if ((guess_input < 1) || (guess_input > 100)) {
		alert('Please enter a number in the range 1 to 100')
		return false
	}

	if (guess_input > target) {
		alert('your number is too large')
		return false
	}

	if (guess_input < target) {
		alert('your number id too small')
		return false
	}
	alert ('You got it! The number was ' + target + '\nIt took ' + guesses + ' guesses to get it')
	return true
}

// function check_guess(rnum) {
// 	var correctguess = false
// 	var attempts = 0
// 	var data
// 	while (!correctguess) {
// 		var guess = prompt('what is the number I am thinking?')
// 		attempts++
// 		console.log('attempt = ' + attempts)
// 		console.log('you entered ' + guess)
		
// 		data = parseInt(guess, 10)
// 		console.log(data)

// 		// check if the input is a number
// 		if ( Number.isNaN(data) ) {
// 			alert('please enter an integer')
// 		} else {
// 			if ( data < 1 || data > 100) {
// 				alert('your guess is out of range')
// 			} else {
// 				if ( data == rnum) {
// 					alert('Correct guess. You took ' + attempts + ' attempts')
// 					correctguess = true
// 				} else if ( data > rnum) {
// 					alert('your guess is too large')
// 				} else if ( data < rnum) {
// 					alert('your guess is too small')
// 				}
// 			}
// 		}
// 	}
// }