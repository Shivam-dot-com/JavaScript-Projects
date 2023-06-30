# Tetris using JS

### Concepts to be used
- Classes
- Arrow Functions
- Destructuring
- let and const 
- Proxy

### About Game
- It contains small blocks called Tetrominos
- Tetrominos are a collection of four blocks

## Project Strucutre
- constants.js : is where we put the **configurations and rules** of thegame.
- board.js : is for **board logic**.
- piece.js : is for **piece logic**.
- main.js : has code to **initialize the game** and the **overall game logic**.
- index.html : the **order of the scripts** that we add at the end is essential.
- styles.css : all the **beautifying styles** are in here.
- README.md : markdown **info file** that is the first page in the repository.

**Size & Style**
- Board consists of 10 Cols & 20 Rows
- Get canvas element and it's 2D context
  
**Tetrominos** 
- Tetris is a shape consisting of four blocks, move as a unit.
- The names I, J, L, O, S, T, and Z are from the resemblance in their shape.

**Enums**
- map the keys to the key codes
- Enum (enumeration) is a special type used to define collections of constants.

