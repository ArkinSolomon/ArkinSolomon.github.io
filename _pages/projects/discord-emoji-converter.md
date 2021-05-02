---
layout: project
title: Discord Emoji Converter
permalink: /projects/discord-emoji-converter
id: discord-emoji-converter
force-width: 50%
---
For a Discord bot I was making, I needed to convert Discord emoji shortcodes to emoji characters, so I made an NPM package to do just that. If you don't know, shortcodes look like `\:grin:` and that resolves to 😁, for example. When Discord bots recieve messages, however, the emojis given are in shortcode form, I needed them in character form. I figured other people might also need one, so I built a little NPM package.

It's very small and very simple. It contains three functions, an error class, and an object. Yet as far as I know, there is no package like it. It makes sense though, the demand for such a package is small, it's not very often that you would need to do such a thing. With only 154 downloads, it is my least downloaded file, but it works on a very useful (private) Discord bot that I still use today.

The three functions I have are `getEmoji()`, `getShortcode()`, and `emojify()`. `getEmoji()` is the main purpose of the package, it converts a shortcode to an emoji, however I have also provided `getShortcode()`, which is just the opposite, that is, it takes an emoji and converts it to a shortcode. However, `emojify()` is probably the one used most often, it takes a string, like a sentence or phrase, and converts all the shortcodes in the string to emojis. I provided it as I felt that that was something that would be used often. I did not include a `shortcodify()` function because I felt that there would not be a case where that would be needed.

The package uses a modified and minified JSON file from [Kalingoo on GitHub](https://github.com/kangalioo), which you can view [here](https://gist.github.com/kangalioo/5e0f19e8145587c05e219597fbd2d352). You can also download this package from NPM [here](https://www.npmjs.com/package/discord-emoji-converter) and view the source on GitHub [here](https://github.com/ArkinSolomon/discord-emoji-converter).
