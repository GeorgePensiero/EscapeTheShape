# EscapeTheShape

## Background and Overview

Escape the shape is a simple and fun game where players control a sprite circling a shape in the middle of the screen.
Bigger shapes shrink down in size and the player tries to escape from the shrinking shape by finding a hole in the shape and
not getting hit. Score is kept by a timer, the longer you last, the higher your score. 
The game is inspired by Super Hexagon, which was released on ios in 2012. 

## Functionality and MVP features

In Escape the shape players will be able to 

1. Move the player sprite using the left and right arrow keys
2. Avoid incoming shrinking shapes, and die if they get hit by them
3. Rack up their score by staying alive for longer periods of time
4. View their score on a scoreboard when they finally get hit by a shape

## Architecture and technologies

Escape the Shape will be implemented with the following technologies: 

1. Javascript, for game physics/logic
2. HTML, for canvas generation and ability to interact with DOM
3. CSS, for styling purposes


## Implementation Timeline

Day 1:

1. Set up developer enviroment(webpack, index.html, javascript files)
2. Render middle shape on canvas and player sprite around shape

Day 2: 

1. Make user sprite interactive and able to move around middle shape
2. Render larger shapes with opening


Day 3: 

1. Make larger shapes shrink towards the center of the canvas
1. Enforce collision detection between player sprite and incoming shapes 

Day 4: 

1. Make multiple shapes continuously spawn and shrink
2. Set up scorekeeper(timer)

Day 5: 

1. Add developer info 
2. Add play button
3. Add game over banner and ability to play game again


## Bonus features

1. Incoming shapes randomly change direction from clockwise to counter-clockwise
2. Game increases in speed the further player gets in the game
3. Different shapes spawn(maybe different shape levels)
4. Keep track of top ten high scores 
