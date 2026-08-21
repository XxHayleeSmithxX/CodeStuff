capitalGuess = input("What is the capital of Latvia? ")
numberOfGuesses = 1

while capitalGuess != "Riga":
    numberOfGuesses = numberOfGuesses + 1
    capitalGuess = input("Guess again. ")

print("You guessed it. Riga is the capital of Latvia. It took you " + str(numberOfGuesses) + " guesses.")