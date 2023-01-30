---
layout: project
title: Tetris
permalink: /projects/tetris
id: tetris
force-width: 65
---

***TEST GH-PAGES ENV***

After finishing my first Introduction to Computer Programming final project, [Cuby](/projects/cuby), I made another one: the classic game of Tetris. I chose this project because I felt that it would be quite simple, and could be finished within a few weeks, since I didn't have much time left in class to complete it. It is once again built on Python (Python 3 this time) using [Pygame](https://www.pygame.org/). It follows the basic idea of Tetris. Blocks of different shapes fall from the sky, and you have to rotate and position them in order to fill a row. Once a row is filled, the row disappears, and the blocks fall down. One point is awarded when a block lands, and an additional ten points are awarded for each row that is filled. The goal of the game is to get the highest score you can without having the blocks touch the top of the screen. When a block touches the top of the screen, the game ends.

The game can be scaled to any size using command line arguments (`--width` for width, `--height` for height). By default it is 9x20. It also includes a `--print-data` argument for debugging purposes. The game is stored in a two-dimensional array of boolean values (`map`). A value of true means that a tile is filled in at `map[y][x]` where `y` and `x` are 0-based indexes of the row and column. When all the values of `map[i]` are true, `map[i]` is deleted, and `map[i]` is set to `map[i - 1]`, and `map[i - 1]` is set to `map[i - 2]` and so on, until `map[0]`, which is set to a new array of all false values. Below you can see the game running on the right, and the terminal window with the `--print-data` argument updating.

{% assign img-alt = "Data outputed" %}
{% assign img-path = "/images/projects/tetris/tetris-print-data.png" %}
{% assign img-width = 65 %}
{% include project-image.html %}
Each block is a group of tiles, and each tile is just a square sprite with a color. As the block updates, it moves all of it's own tiles down by increasing the y-coordinate of the tile, after checking to see if there is room for it to move. Each block is hard-coded into the game, and the game generates a random number between zero and six (inclusive) to pick a block to generate. When a block is generated, not only does it generate tiles relative to the center of the game, it also sets an axis of rotation, that each block is revolved around. Below is part of the code for block rotation:

```py
if dir == 'cw':
  collide = False
  exclusive_map = deepcopy(self.map)
  for coord in self.coords:
      exclusive_map[coord[0]][coord[1]] = False
  for coord in self.coords:
      if coord[2] == self.coords[self.axis][2]: continue
      dist_from_axis_x = coord[1] - self.coords[self.axis][1]
      dist_from_axis_y = coord[0] - self.coords[self.axis][0]
      if self.__check_collide(self.coords[self.axis][0] + dist_from_axis_x * -1, self.coords[self.axis][1] + dist_from_axis_y, map=exclusive_map):
          collide = True
          break
```
<br>
I remember block rotation took me a while to figure out, so I will explain how the code above works, line by line. The first thing that is done (line 3) is it makes a copy of the map, so that we can modify it for collision checking. Then in lines 4 and 5, the block is erased from the copy of the map so that we can modify and write new values to it. Next we check each tile, and get the offset from the x and y axes (lines 8 and 9), unless it is the axis tile, then we ignore it (line 7). Next the collision is checked for the tile, which is rotated relative to the axis, by inverting one of the distances (line 10). So instead of adding, we'd subtract the distance from the x-axis. If there is a collision, the block is not rotated, and the loop is broken out of (lines 11 and 12). The previous snippet is code for clockwise rotation, counter-clockwise rotation is similar, except the y-distance from the axis is inverted.

The biggest mistake that I made making this project was not commenting. There is not a single comment in the whole source code. However, for development this didn't pose any problems to me, because the code was created over a short period of time (1 week). Since I have a fairly good idea of how the code works, I was able to decode and present it on here, but some of it, I don't understand. I also noticed some features that I didn't implement, for instance there is no dropping the block, you need to wait for the block to fall down. Also there is no "holding" a block, which is where you put a block that you don't want off to the side for later.

The game is playable, and you can view and/or download the source code on GitHub [here](https://github.com/arkinSolomon/tetris).
