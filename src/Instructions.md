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
* 5: Create a function `holdDice` that takes
* `id` as a parameter. For now, just have the function
* console.log(id).
*
* Then, figure out how to pass that function down to each
* instance of the Die component so when each one is clicked,
* it logs its own unique ID property. (Hint: there's more
* than one way to make that work, so just choose whichever
* you want)
*

\*/
/\*\*

- 6: Update the `holdDice` function to flip
- the `isHeld` property on the object in the array
- that was clicked, based on the `id` prop passed
- into the function.
-
- Hint: as usual, there's > 1 way to accomplish this.
- I'll be using `dice.map()` and checking for the `id`
- of the die to determine which one to flip `isHeld` on,
- but you can do whichever way makes the most sense to you.
  \*/
  /\*\*

* 7:
* 1.  Add new state called `tenzies`, default to false. It
* represents whether the user has won the game yet or not.
* 2.  Add an effect that runs every time the `dice` state array
* changes. For now, just console.log("Dice state changed").
  \*/
