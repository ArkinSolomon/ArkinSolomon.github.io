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

One thing that there aren't a lot of APIs for is Spanish conjugation. Essentially, putting a word in and searching for a specific conjugation can be difficult, as a lot of translators online rely on context. One site that can do this easily is [Spanish Dict](https://www.spanishdict.com). Another benefit of SpanishDict is that it tends to be more accurate since it grabs data from multiple sources. SpanishDict also provides different tenses. However, SpanishDict does not have a public API. I created my own "API" to allow easily translate and conjugate words.

The package is extremely simple, at less than 150 lines of code in total. It's spread across two files, one handles conjugation, and one handles translation. Each file simply make a request to SpanishDict to get the appropriate page (either /conjugate or /translate), then using [Cheerio](https://www.npmjs.com/package/cheerio), it scrapes the site and returns the appropriate data.

The need for this package is very specific, there already exists better translation APIs, which are useful for full sentences. However, I did learn a lot from making this package, it taught me about web scraping and promises. Although the package has been deprecated, the project source code is available on GitHub [here](https://github.com/ArkinSolomon/spanish-dict-client). You can install the project through NPM [here](https://www.npmjs.com/package/spanish-dict-client) and try out the package for yourself.