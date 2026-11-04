# shell-charlie-game
> The shell-charlie-game is finding which shell is it under after the shell has slid into different spots until it stops.

## authorship
- JaJuan Steward | ([https://github.com/jajuansteward/AIshell.html](https://jajuansteward.github.io/shell-charlie-game/)) | 10/22/26 | version 2.0

## user story 
- **As a** player who enjoys memory and guessing games, 
- **I want** the user to find a jewel/shell under three coconuts
- **so that** way the user playing the shell-charlie-game can find the shell.

## narrative
- Shells and Coconuts WOW!
- Step into a thinking and fast-pace game where you have to find which shell is under which coconut while it is sliding into different spots.
- Are you ready for the challenge? Watch closely, remember the position, and find the shell!

## about the app
- Three coconuts displayed on the screen.

- A hidden jewel underneath one coconut.

- A demonstration that shuffles the coconuts into different positions.

- Clickable coconuts that allow players to make a guess.

- Feedback that tells players whether they found the shell or not.

### each of these as lvl-3 headings...
- shell-wireframe
- ([https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluMpsVl8CPvqhDXAFmAs7W13FZvD0HIsGIDuxqxPzJQ&s=10))

### wireframe & game ideas
- [ wiki/wireframe & issue/game ideas]
- ([https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluMpsVl8CPvqhDXAFmAs7W13FZvD0HIsGIDuxqxPzJQ&s=10))
- https://github.com/jajuansteward/shell-charlie-game/issues/1
- https://github.com/jajuansteward/shell-charlie-game/issues/2
- https://github.com/jajuansteward/shell-charlie-game/issues/3

### project directory structure
```
    index.html
│   README.md
│   
├───assets
│   ├───css
│   │       example.css
│   │       style.css
│   │       
│   └───js
│           script.js
│           
└───pages
        AIshell.html
        shell.html
```
## tech stack
 - e.g., vsCode (live server, todo, prettier)
 - HTML (emmet),
 - CSS (normalize, bs5 & bs icons)
 - js (jQ, jQui)
 - GitHub (repo, readme/markdwon, wiki, issues, GitHub pages)

### code snippet
```javascript
document.querySelectorAll(".shell").forEach((shell, index) => {
        shell.innerHTML = "🥥<br>" + (index + 1);
        shell.style.backgroundColor = "";
```

### future ideas.
- https://github.com/jajuansteward/shell-charlie-game/issues/1
- https://github.com/jajuansteward/shell-charlie-game/issues/2
- https://github.com/jajuansteward/shell-charlie-game/issues/3


