---
layout: project
title: Zombie Fight
permalink: /projects/zombie-fight
id: zombie-fight
force-width: 48
---
This project was for my AP Computer Science Principles class in 10th grade. I was able to finish most of the course work early, and was able to start on my final project. I used Node.Js and Socket.io to create a simple multiplayer game called Zombie Fight. In it, you are a circle that runs around from green circles, zombies. The game is far from complete, riddled with bugs, and it also has no ending. You just run around avoiding zombies and healing until your computer crashes or the server crashes from spawning too many zombies.

{% assign img-alt = "Zombie Fight game screenshot" %}
{% assign img-path = "/images/projects/zombie-fight/game-screenshot.png" %}
{% assign img-width = 40 %}
{% include project-image.html %}

This project was really fun to work on, it took me a few months to make, and has a lot of features/implementations that I think are neat. One feature I really liked was the console. The terminal window turns into a console to run administrator commands to change gameplay. You could change zombie speeds, kill players or zombies, view system information, and more. The console was very useful for debugging and testing.

{% assign img-alt = "Zombie Fight console screenshot" %}
{% assign img-path = "/images/projects/zombie-fight/console-screenshot.png" %}
{% assign img-width = 35 %}
{% include project-image.html %}

One of the features of the game that I developed was the map string. The map is stored in /src/map/map.zfms. One tile looks like this: `77d655&0%`. The entire map consists of over 3,000 tiles. The first six characters are the color of the tile, the number between the ampersand and the percentage sign is a one if it is a wall, otherwise it's a zero. The map is exported to two JSON files. One contains the "texture," it holds tile colors, and the other contains the walls, coordinates between two tiles. The walls were an entire tile thick, I think if I were to remake this game, I would make the walls less thick, and condense it into a single tile.

While making this game, I became more familiar with object-oriented programming and objects in general. Looking back on the project, I still made several mistakes with them, and they could've been greatly improved. Nonetheless, they really helped simplify and abstract code, and I definitely should've used them more. I also wish I had better documentation for the code. Being one of my first big projects, I figured I should comment my code. The comments, in some cases are fine, but a lot of times, they're very self explanatory and unnecessary.

This project was a great learning experience, and I'm glad I created it. It was a lot of fun, and it's still one of my most favorite projects. I don't have it hosted or running anywhere, since it just infinitely spawns zombies, no matter if anyone's playing or not. It gets laggy and unplayable very fast. Nonetheless, if you would like to try your hand at it, the game and it's source can be found [here](https://github.com/ArkinSolomon/zombie-fight) on GitHub. Just clone the repository, run `npm install && node .` and you're good to go. The controls are simple: WASD to move, left shift to sprint, Q to use a bandage, and E to use a medkit. The repository is archived, I don't intend to work on or contribute to it anymore.
