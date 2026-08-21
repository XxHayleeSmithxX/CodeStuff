capitalGuess = input("What is the capital of Latvia? ")
numberOfGuesses = 1
while capitalGuess != "Riga":
    numberOfGuesses = numberOfGuesses + 1
    if numberOfGuesses > 3:
        print("You guessed incorrectly three times. Game over.")
        break
    capitalGuess = input("Guess again. ")
if numberOfGuesses <=3:
    print("You guessed it. Riga is the capital of Latvia. It took you " + str(numberOfGuesses) + " guesses.")
