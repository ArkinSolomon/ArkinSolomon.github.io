---
layout: project
title: Pascal's Triangle
permalink: /projects/pascals-triangle
id: pascals-triangle
---
Pascal's Triangle was something that we all learned about in school, the coefficients of a binomial. Each coefficient is the sum of the two coefficients above it. It extends infinitely. So I figured, for something infinitely generated, why not make it infinitely scrollable.

Creating this wasn't incredibly difficult, I think it took me about a day to create, just for fun. The code itself is pretty simple as well. It's a linked list, with the line contents is created in the line class constructor, as seen here:

```js
constructor(prevLine){
    this.prevLine = prevLine;
    this.i = lines.length;
    var prevNumber = 0;
    var currNumber = 0;
    this.line = [];
    for (let i = 0; i <= prevLine.line.length; ++i){
      currNumber = (typeof prevLine.line[i] !== 'undefined') ? prevLine.line[i] : 0;
      prevNumber = (i !== 0) ? prevLine.line[i - 1] : 0;
      this.line.push(currNumber + prevNumber);
    }
}
```
<br>
Here's the code to generate a new line whenever someone scrolls down. I'm 99% sure I found the scroll event listener off of StackOverflow, but it is pretty simple. All we're doing is getting the position of the top of the screen (basically how far it scrolled down), `scrollTop`, and adding it to the height of the client, `clientHeight`. If these variables are greater than about the end of the page, `scrollHeight`, then a new line is added.

```js
function addLine(){
  var newLine = new Line(lines[lines.length - 1]);
  lines.push(newLine);
  $('#wrapper2').html($('#wrapper2').html() + `<p class="line" id="line-${newLine.i}">${lines[newLine.i].line.join(' ')}</p>`);
  var elem = $(`#line-${newLine.i}`);
}

window.addEventListener('scroll', () => {
  const {
      scrollTop,
      scrollHeight,
      clientHeight
  } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 36){
    addLine();
  }
}, { passive: true });
```
<br>
The full code for this project is on a Gist which you can view [here](https://gist.github.com/ArkinSolomon/e706638df4be5b04fbeb9719adb326ee). I have also uploaded a demo of the triangle which you can view [here](/demos/pascals-triangle).
