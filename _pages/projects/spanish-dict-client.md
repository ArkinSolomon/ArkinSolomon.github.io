---
layout: project
title: SpanishDict Client
permalink: /projects/spanish-dict-client
id: spanish-dict-client
force-width: 50
---
<div class="callout warning">
  <h6>This project is against SpanishDict's terms of service and has been deprecated. Use the package or any code at your own risk.</h6>
</div>

Hola! Mi nombre es Arkin y no puedo hablar Español. Could you understand that? No? Neither can I! Good thing we have SpanishDict that comes to the rescue for all your Spanish translation needs. And no, I'm sponsored, SpanishDict is just what helped me get through Spanish class. When I used it, I was always surprised at how it could conjugate verbs into any tense, something that I really really struggled with. There came a point where I had to fill out a spreadsheet of conjugations, so naturally, I decided to make the whole process "easier" (I spent more time making this package than it would've taken me to do the assignment myself) by doing it automatically. After searching far and wide for a SpanishDict API, I couldn't find one, so I made one myself and published it on NPM.

The package is extremely simple, at less than 150 lines of code in total. It's spread across two files, one handles conjugation, and one handles translation. Each file simply make a request to SpanishDict to get the appropriate page (either /conjugate or /translate), then using [Cheerio](https://www.npmjs.com/package/cheerio), it scrapes the site and returns the appropriate data.

I was really proud of this project, even though it only has 367 downloads in total (as of 4/28/2021). I suppose the need for this package is very specific, there already exists better translation APIs, that I probably should have used. That was one of my biggest mistakes, it would've been so much easier just to use one of those. However, I did learn a lot from making this package, it taught me how to scrape the web through Node.js, something I still use (for personal/private projects). This was also around the time I was learning how to use promises (I'm not sure if this was my first project with promises) and I remember this helping me figure out a lot. As with any project, I learned from it, and it didn't even take me that long to make, so I would say that it was worth it.

The project source code is available on GitHub [here](https://github.com/ArkinSolomon/spanish-dict-client). You can install the project through NPM [here](https://www.npmjs.com/package/spanish-dict-client) and try out the package for yourself (at your own risk).
