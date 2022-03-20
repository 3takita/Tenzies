/_1:
Write a function (allNewDice) that returns an array of 10 numbers between 1 and 6 inclusive.l Log the array of numbers to the console for now.
_/

/\*\*

- 2:
-
- Create state to hold our array of numbers. (Initialize
- the state by calling our `allNewDice` function so it
- loads all new dice as soon as the app loads)
-
- Map over the state numbers array to generate our array
- of Die elements and render those in place of our
- manually-written 10 Die elements.
  \*/
  /\*\*

* 3: Update the array of numbers in state to be
* an array of objects instead. Each object should look like:
* { value: <random number>, isHeld: false }
*
* Making this change will break parts of our code, so make
* sure to update things so we're back to a working state
  \*/
  /\*\*
* 4: Add conditional styling to the Die component
* so that if it's held (isHeld === true), its background color
* changes to a light green (#59E391)
*
* Remember: currently the Die component has no way of knowing
* if it's "held" or not.
  \*/
