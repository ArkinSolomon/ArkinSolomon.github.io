---
layout: project
title: Arkin
permalink: /projects/arkin
id: arkin
force-width: 50
---
<div class="callout warning">
  <h6>This project/package contains mostly synchronous functions, there is probably better ways to implement this.</h6>
</div>

My first NPM package was Arkin, named after me, Arkin. I mostly built it to learn how to make an publish NPM packages, I was still learning a lot about JavaScript when I made it, so I didn't realize that I didn't need to make complex functions, yet for some reason this is my most downloaded package with over 3,000 downloads.

The functions that it contains are so random and all over the place, theres a function to synchronously wait, a function to print a list, a function to stop the program, and a few more. Like I said, all of these functions were unnecessary, a lot of them were only one line. Some code already has libraries. The `getDate()` functionality can be achieved through [Moment.js](https://momentjs.com/), which also provides more .

The code was also unnecessarily verbose, and it was not commented, so it's kind of confusing for me to read through it. For instance, the `toBoolean()` function, here's the internal code for it:  

```js
//TOBOOLEAN FUNCTION
exports.toBoolean = function(boolIn, toInteger){
    if (boolIn === 'true' || boolIn === 'false'){
        if (boolIn === 'true'){
            return true;
        }else{
            return false;
        }
    }else if (toInteger){
        if (boolIn.includes('.' || boolIn.includes(','))){
            let bool = boolIn.replace(',', '.');
            let boolFloat = parseFloat(bool);
            let intString = boolFloat.toString();
            if (intString.length === boolIn.length){
                return boolFloat;
            }else{
                return boolIn;
            }
        }else{
            return boolIn;
        }
    }else{
        return boolIn;
    }
}
```
<br>
This function would look better like this:
```js
/**
 * Check if a string is 'true' or if a number string or float string is greater than zero.
 *
 * @param {String} boolIn The string to check.
 * @returns {Boolean} True if the function evaluates that the string is 'true' or if a number string or float string is greater than zero.
 */
exports.toBoolean = function(boolIn){

  //Check if the provided string is 'true' or 'false'
  if (boolIn === 'true' || boolIn === 'false') return boolIn === 'true';

  //Parse the string if it is a float or number
  let boolInOrig = boolIn;
  boolIn = boolIn.replace(',', '.');
  boolInFloat = parseFloat(boolIn);

  //Check if the string was even a number
  if (isNaN(boolIn)) return false;

  return boolIn > 0 && //Return true if the float is greater than 0
  boolInOrig.replace(/^0./, '.').length === boolInFloat.toString().replace(/^0./, '.').length; //Return false if there were extra characters in the string (the ones that didn't get parsed)
}
```
<br>
The code could be shorter without the comments, but they are needed, it took me a little while to figure out what I even wrote. This code would also fix a bug, where length checking wouldn't work when there is no preceding zero on the string provided. I won't be updating the package with this new code, it was deprecated a long time ago.

I learned a lot from the mistakes I made in this package. Like I published the package to NPM and then installed it to test it, instead of requiring it locally. I think that I have improved in both coding skill and just publication.

If you wish, you can download the package from [NPM](https://www.npmjs.com/package/arkin) or view the package source code on [GitHub](https://github.com/ArkinSolomon/Arkin).
