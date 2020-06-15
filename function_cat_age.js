/*
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
*/

const catAge = years => {
  switch (years) {
    case 1: return 15;
    case 2: return 24;
    default: return 24 + ((years - 2) * 4);
  }
};

//For example:
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
catAge(13); // 68