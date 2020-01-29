Code Plan for Towers of Hanoi

Working on towers of Hanoi, I had a way I wanted to attak the project. I knew there was a sequence that the towersOfHanoi function had to go through to make the game work based on the functions that were presented.

    1. First the game would have to check and see if a move was legal. Meaning it would have to see if the last position in the endStack was bigger or smaller than the last block from the startStack.

    2. Next if the move was legal, the game would then have to move the desired piece from the startStack to the endStack.

    3. Next the game would have to check and see if the player won with their newly moved piece. If the player won the checkForWin function would tell them they won. If the player did not win the game would just continue to the next turn.

I followed this course of action when it came to my code as well, starting with the isLegal function comparing the last positions of startStack and endStack. If the last position in endStack was smaller than the last position of startStack, the function would return false and wouldnt allow the move.
Otherwise the function would send you to a portion of the code which just makes sure your start stack and end stacks are different stacks which if the move meets the previous perameter it was a legal move, otherwise the function returns false.

Next I move to the movePiece function which was by far the easiest piece. It accepted startStack and endStack and used the .pop() method on start stack, removing the last item from the array and setting it equal to the variable x.
Once held I called the .push() method on endStack and pushed x (my block from startStack) onto the end of endStack.

After making a function that made the blocks move. I worked on the checkForWin function. Logically all you have to check in this function is if the lengths of stack b or the lengths of stack c was equal to the total number of blocks. If the block total is equal to 4 then you win the game and the console tells you, otherwise the function returns false.

The next step was to put it all together in the towersOfHanoi function just as I laid out earlier calling each function in the order I need them to execute for the game to work.

I had a little trouble with passing the tests but with a little help from a tutor I was able to accomplish the task.
