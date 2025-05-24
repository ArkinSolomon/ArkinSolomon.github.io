---
layout: project
title: Cuby
permalink: /projects/cuby
id: cuby
force-width: 70
---
Platformers are one of the most intermediate projects that people do. The most well known platformer is probably Mario. I too attempted to make a platformer, and I called it, Cuby. In the game, you are a cube in a world of circles that are trying to attack you, pretty simple. I wrote this game in Python 2 using [Pygame](https://www.pygame.org/) for my Introduction to Computer Programming class final in 11th grade. It has simple features like level unlocks, saves, a level creator.

{% assign img-alt = "Cuby level editor screenshot" %}
{% assign img-path = "/media/projects/cuby/cuby-game-screenshot.png" %}
{% assign img-width = 70 %}
{% include project-image.html %}

The gameplay is simple, kill all of the circle enemies by either knocking them off, or slamming on them (by pressing shift). After, the level ending (the big square) turns green and you can walk into it. Sometimes, you will need to move red blocks so that you can jump over obstacles. You have three lives to complete the level, and the level does not reset after every life.

One of the things that I am proud about in this game is the clouds. Here is all of the possible cloud formations in the game: `POSSIBLE_CLOUDS = [30, 15, 39, 38, 57, 60, 58, 23]`. That is a single line of code in the game source. Each cloud consists of six tiles, two high, three wide. Each part (tile) can either be a cloud part, or air, however, generating them randomly would be problematic, you could end up with really weird formations, like a solid block, or no clouds at all. To solve this problem I made a set of 6-bit numbers, where each bit represents whether or not the cloud will have a tile at that position. The first three bits define the top row from left to right, and the last three define the bottom row from left to right. For example, 15 would be `001111`, which means that there would be one tile on the top row at the right-most position, and the bottom row would be completely filled.

These clouds are used in two places, the background of the level, where clouds are generated behind the whole level, and also on the title screen. It took me a while to figure out, but on the title screen, the clouds scroll infinitely. The process to do this is quite simple. Cloud generation generates clouds that will fill the whole screen, so all that's needed is to generate two screens of clouds, and move them both to the left at the same time. Once the first screen is completely gone, another set of clouds is generated, and moves until the second screen is completely off-screen, and so on.

I did stop working on the project, I felt that it was complete as is, and yes, it was bad on purpose. The art style is supposed to be wonky and look like it was made by a third grader, and the platform sizes are not meant to be the same. There was only one oversight, the platforms were supposed to have custom colors, and I forgot to add that, but it's possible to change the level file to use custom colors. There are a few bugs though, such as randomly being pushed off the platform or glitching through it. The project is open source, you can view a copy of the code or download it [here](https://github.com/ArkinSolomon/cuby).
