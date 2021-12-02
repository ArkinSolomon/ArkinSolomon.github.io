---
layout: project
title: Infinite Mazes
permalink: /projects/infinite-mazes
id: infinite-mazes
force-width: 30
---

Infinite Mazes is quite simply a game where you solve mazes... infinitely. The game randomly generates mazes using Kruskal's algorithm for a given size anywhere from 3x3 to 256x256. Every generated maze is perfect, meaning there is only one path from point A to point B. You can also have the app solve the maze for you, in case you give up. Mazes are timed and the times are saved. You can view your best, average solve time for each size of the maze. The game also provides two markers for the player to use to mark paths out, one is a yellow triangle, and the other is a red X. These can be placed anywhere within the maze to mark out where to go, or where not to go.

Controlling is very simple, there are two control types. The default is drag, where you simply drag the path around to solve the maze. Personally I find this option easier for the smaller mazes. The second option is dpad, where you use arrow button to drag around the maze. I implemented this second option after feedback from my friends, saying that it was too hard to control. The speed of the dpad can also be changed in settings. You can also two-finger pinch to zoom in, and two-finger swipe to move around. All of the controls can be seen by viewing the help button in the bottom left of the main menu.

The game is built on the Unity Engine using C#. The maze works by displaying multiple overlayed tile maps (one for the maze, one for the markings, one for user input, one for the automatic solution).

I didn't experience too many bugs, the main one that I experienced was that whenever you click a UI element, you would also interact with the maze behind it. This was fixed simply by checking if the button was pressed down currently, or on the previous frame. Another issue I came across was UI scaling. iPads were my main issue here. The aspect ratio was more square-like than that of iPhones, which were my main test devices. Fixing it was not too bad, I simply created a few scripts for auto-scaling images linearly based on aspect ratio, and I used a vertical stack for the EULA screen.

This app will soon be available on the app store. It has been sitting in GitHub for months, since I had to be 18 to publish. I will update this website when it is published.