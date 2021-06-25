// https://github.com/rolling-scopes-school/guessing-game

/* Description
Your task is to implement GuessingGame class

Methods:
setRange(min, max)
this method accepts min and max value of range of number to guess

guess()
this method returns solution candidate (you make an assumption based on range and previous assumptions)

lower()
this method is called if prev call of guess() returned number which is greater than answer

greater()
this method is called if prev call of guess() returned number which is lower than answer

Your implementation should use binary search algorithm under the hood to pass all tests */