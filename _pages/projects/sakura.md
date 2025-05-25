---
layout: project
title: Sakura
permalink: /projects/sakura
id: sakura
force-width: 40
override: /media/projects/sakura/sakura-logo-text.png
override-dark: /media/projects/sakura/sakura-logo-text-white.png
---

One of the biggest issues with running user created installer scripts is trust: you can't always trust the user that wrote the script. Another issue with installer scripts is that failed install scripts can cause files to be left half-installed or in a broken state. This is what Sakura seeks to solve. Sakura is a dynamically typed, high-level, Turing-complete, and customizable programming language built to interact with the file system. It's designed specifically for package managers, in order to allow package managers to run installer scripts without fear of trusting scripts, or leaving files in a broken state.

Programs, like a package manager, are known as an executor, these configure and call on an interpreter to execute a Sakura file. The interpreter can be configured in many ways, such as restricting read and write operations to certain files or directories. It can also provide custom functions or variables for the script to use, depending on the use case of the script. For instance, if the package manager wants to allow prompts requested by the script, the executor can add a prompt function for the script to call. This feature greatly increases the range of the use cases for Sakura as it allows the language to be built upon.

Sakura also helps security by restricting the amount of features it has by default. If you were to let Python installer scripts be run, there's nothing preventing the script from importing a networking module and then sending over the entire documents folder, or from running shell commands. Sakura provides no networking or shell capabilites by default, though specific capabilities can be added by the executor if necessary.

Sakura's default (Java) interpreter has a lexer and parser developed from scratch. I decided to use Java since its whole basis is cross-platform support. The lexer passes over character by character, and identifes features like quotations, function definitions, loops, and function calls. The parser then takes these tokens and uses a custom algorithm to build a parse-tree with the proper precedences. 

Sakura's syntax is based primarily on JavaScript, and heavily prioritizes conciseness, as its not just targeted towards programmers, but designed to be easily used by non-programmers that need to write simple install scripts. As such, there are many choices made that may be a bit odd to experienced programmers. For instance variables and constants are declared with a `$` and `%` character respectively, however in use, the prefixes are dropped. Also, parentheses are not necessary around loop conditions, or paramater-less function definitions.

This project helped me understand more about interpreters and how programming langauges worked under the hood. Although it seemed like an overwhelming task at first, I found it becoming clearer and simpler as I worked on it. The full documentation for the language can be found [here](https://sakura-docs.arkinsolomon.net/#/) and the GitHub (and documentation) for the interpreter can be found [here](https://github.com/ArkinSolomon/sakura-interpreter-java).