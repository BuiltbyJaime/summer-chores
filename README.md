# Summer-Chores
# 

This project is a fun JavaScript simulation that demonstrates how to use **asynchronous callbacks** to handle a sequence of tasks (or "chores") for a fictional character. The goal is to show how one chore triggers the next **only if the previous one was successfully completed**, mimicking real-world dependencies and energy levels.

## 🛠 Project Summary

The script simulates a person (e.g., "Billy") attempting to complete a list of summer chores:

1. Mow the lawn
2. Use the weed eater
3. Trim the hedges
4. Collect wood
5. Water the garden

Each chore is:
- Simulated with a `setTimeout()` to introduce delay
- Conditioned on the person's **energy level**, using a probabilistic `useEnergy()` function.

If the person "runs out of energy" (i.e. `useEnergy()` returns false), they "fall asleep" and stop working.

This project contains 3 files that demonstrates 3 iterations of asynchronus code to display the importance of control flow in asynchronous JavaScript.

---
callbackVersion.js -
 a **callback-based style** to illustrate "callback hell."

promiseVersion.js -
 Refactors the callback version using JavaScript Promises and .then() chains.

asyncAwaitVersion.js -
 Uses async/await for a clean, modern, and readable approach to asynchronous logic.

 Includes proper try...catch for handling failed tasks.


## 🔧 Requirements

To run this project, you need:

- Node.js (optional, for command-line execution)
- A modern web browser (if running in browser console)

**No additional libraries or frameworks are required.**

---

## 🚀 How to Run

You can run this project in two ways:

### Option 1: In the Browser
1. Open your browser's developer console (e.g., Chrome DevTools).
2. Copy and paste the entire JavaScript code into the console.
3. Press Enter to run.

### Option 2: In Node.js
1. Save the code into a file, e.g. `chores.js`.
2. Run in terminal with:
   ```bash
   node chores.js
