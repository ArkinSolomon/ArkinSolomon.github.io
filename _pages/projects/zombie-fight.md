---
layout: project
title: Zombie Fight
permalink: /projects/zombie-fight
id: zombie-fight
force-width: 48
---
In 10th grade, I took AP Computer Science Principles. I finished the class really early, I was the only one with coding experience in the class. I was told to start on my final project early and I went overkill. With Node.js and Socket.io made a multiplayer game called Zombie Fight. In it, you are a circle that runs around from green circles, zombies. The game is far from complete, riddled with bugs, and it also has no ending. You just run around healing until your computer crashes or the server crashes from spawning too many zombies.

{% assign img-alt = "Zombie Fight game screenshot" %}
{% assign img-path = "/images/projects/zombie-fight/game-screenshot.png" %}
{% assign img-width = 40 %}
{% include project-image.html %}

This project was really fun to work on, it took me a few months to make, and has a lot of features/implementations that I think are neat. First of all it has a console. The node window turns into a console to run admin commands. You could change zombie speeds, kill players or zombies, view system information, and more. The console was very useful for debugging and testing. It's not easy to test wall collision when a zombie is running at you.

{% assign img-alt = "Zombie Fight console screenshot" %}
{% assign img-path = "/images/projects/zombie-fight/console-screenshot.png" %}
{% assign img-width = 35 %}
{% include project-image.html %}

One of the features of the game that I developed was the map string, it's pretty interesting. The map is stored in /src/map/map.zfms. One tile looks like this: `77d655&0%`. The entire map consists of over 3,000 tiles. The first six characters are the color of the tile, the number between the ampersand and the percentage sign is a one if it is a wall, otherwise it's a zero. The map is exported to two JSON files. One contains the "texture," it holds tile colors, and the other contains the walls, coordinates between two tiles. The walls were an entire tile thick, I feel like if I were to remake this game, the walls wouldn't be so thick. I'm not sure if this was the best way to implement it, but it worked, and I was proud of it.

I also worked really hard on trying to get the math for the game. The zombie pathfinding required a lot of trigonometry, but it's still extremely simple. The zombies don't find their way around buildings or through doors, that would require more complicated mechanics, which I definitely did not have enough time to create.

While making this game, I also figured out classes and object-oriented programming. However, I did make the mistake of putting classes at the bottom of my main files, I feel like it would've been better in its own file. Nonetheless, they really helped manage code, and I definitely should've used them more, perhaps for users as well. There was also a lot I didn't understand about classes.

```js
//Item class
class Item {
  constructor(item){
    this.id = new Date().getTime().toString();
    this.item = item;
    this.name = `item${this.id}`;
    this.coords = getRandomCoords();
    this.x = this.coords[0];
    this.y = this.coords[1];
  }

  getName(){
    return this.name;
  }

  objectify(){
    return {
      x: this.x,
      y: this.y,
      item: this.item,
      name: this.name,
      id: this.id,
      timeRemaining: 60000
    };
  }
}
```
<br>
You can see the `objectify()` method, which is pretty useless, as simply using the class would provide the same result. I also wish I had documentation for the code. The comments, in some cases are fine, but a lot of times, they're very self explanatory. As you see in the snippet above, I only had one comment, for the whole class, that isn't helpful. It just says the name of the class.

This project was a great learning experience, and I'm glad I created it. It was a lot of fun, and it's still one of my most favorite projects. I don't have it hosted or running anywhere, since it just infinitely spawns zombies, no matter if anyone's playing or not. It gets laggy and unplayable very fast. Nonetheless, if you would like to try your hand at it, the game and it's source can be found [here](https://github.com/ArkinSolomon/zombie-fight) on GitHub. Just clone the repository, run `npm install && node .` and you're good to go. The controls are simple: WASD to move, left shift to sprint, Q to use a bandage, and E to use a medkit. The repository is archived, I don't intend to work on or contribute to it anymore. Also, I did unarchive it for a little bit to fix the map, so it isn't broken anymore. You can always fork it or make a copy of it if you would like to add features to it or fix bugs.
