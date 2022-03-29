# Description

You are working in a game company, and your task is to create a command line game, you decide to develop the famous Tic Tac Toe game, for this you need to develop the following:

## Player class

1. A class with the name Player, this class would be only use to store the player name, it should have a private string called nickname
2. The player class should use get and set for the nickname in order for other objects to have access to the information.
3. The nickname should be part of the constructor initialization (shortcut version)
4. A class with the name Board, this class would be the representation of the 3 by 3 board in a tic tac toe game.

## Board class

These are going to be the minimum requirements that the class should have, if you need any other methods or attributes to use, feel free to create them, be creative and have fun.

1. A private attribute that would represent the board game, this attribute should be a matrix, to represent the rows and columns of the board
2. Two private attributes to represent the symbols in the game, you can use ‘X’ and ‘O’ or you can use an emoji instead.
3. The constructor should receive the rows and columns that the board would have.
4. The rows and columns should be private so only the Board class should be able to access it.
5. A private method to initialize the matrix, this method should be called in the constructor, and should be in charge of initializing the matrix, reading the rows and columns that the class has.
6. A public method to clear the matrix, this method should be in charge of clearing the values inside the matrix in order to play again.
7. Our recommendation is to use the following values inside the matrix

   - -1: To tell your board this cell is empty
   - 1: To tell your board this cell has the ‘X’ value or the emoji you decide to use
   - 0: To tell your board this cell has the ‘O’ value or the emoji you decide to use

8. A public method to return the board, this method should be in charge to return the board in a friendly-way, example:

```
============================
Jesus: 🐲
Yosef: 🐼
============================

  1   |  2   |  3
 ------------------
  4   |  5   |  6
 ------------------
  7   |  8   |  9
```

## TicTacToe class

These are going to be the minimum requirements that the class should have, if you need any other methods or attributes to use, feel free to create them, be creative and have fun.

1. The following private attributes:
   - history: An array to record all the moves made by the players. (Tip: We recommend you to store not only the moves, but who is making the moves and the values that is being used)
   - endMessage: This would be the message to show at the end of the game, this message should show if a user has won the game or if the game ends in a tie
   - board: This should be an instance of the Board class, and would be the object to use in order to make the moves and to show the game
   - players: You should have an array that could only have two instances of the Player class, this array would be use to know what are the players playing the game
2. The constructor should be empty in the arguments, but inside of it you should create the instance of the Board class, by callin the constructor with the 3 rows and 3 columns arguments (In here you are initializing the board attribute)
3. You should have a private function called checkEndOfGameByWinning, this function should be in charge of verifying if some has won the game
4. You should have a private function called checkEnOfGameByTie, this function should be in charge of verifying if the game has end in a tie
5. You should have a private function called move. This function would receive the player instance that is doing the move, the number of the cell that you decide to make your move, and the user option (1 or 0 ) that is associated with the user that is making the move. In order to record the moves, we recommend you to save the move information in the array of history, so you can use it later.
6. A function called displayGame, basically this function would calle the public method that would display the board in the board class, but here you can also use it to pass the players names to the board function if you want. This function should print the board in a friendly-way using the return value of the board function.
7. A function called playersSetup, this function should have the setup for the players that are going to play the game should ask for the player names and should decide who goes first (Tip: In here is where you fill that players attribute you define in the class)
8. A function called startGame, this function should have the logic of the main game (tic tac toe) , should be in charge to call the playersSetup function and then display the board (calling the displayGame function) and asking the active user to choose a cell value, after choosing the value should be place in the board, and the board should be shown with the result of the user. Remember that you should continuously check if some of the users has won or if the game is in a tie and no more moves are allowed. Remember this is the main logic of the game.
9. A function called showHistory, this function should be in charge of displaying the last history stored (the last played game) with all of the moves and results from the user, and also it should show the final message of the game (if someone won or if it ended in a tie)

## Main class

The main class is simple, in the start method you should have a friendly-menu to show the following options:

1. Start game: This would call the startGame option in the TicTacToe class (Remember that you need an instance in order to make that call 😉)
2. Show last game: This would calle the showHistory option in the TicTacToe class (Remember that you need an instance in order to make that call 😉)
3. Exit: This option should exit the program
