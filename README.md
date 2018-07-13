# Emoji Code

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/release/idleberg/vscode-emoji-code.svg?style=flat-square)](https://github.com/idleberg/vscode-emoji-code/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.emoji-code.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.emoji-code)
[![Travis](https://img.shields.io/travis/idleberg/vscode-emoji-code.svg?style=flat-square)](https://travis-ci.org/idleberg/vscode-emoji-code)
[![David](https://img.shields.io/david/idleberg/vscode-emoji-code.svg?style=flat-square)](https://david-dm.org/idleberg/vscode-emoji-code)
[![David](https://img.shields.io/david/dev/idleberg/vscode-emoji-code.svg?style=flat-square)](https://david-dm.org/idleberg/vscode-emoji-code?type=dev)

Snippets to insert escaped Emoji code into HTML, CSS, JavaScript/CoffeeScript/TypeScript/LiveScript, JSON, C#, Laravel Blade, Markdown, Python and Ruby.

This package is also available for [Atom](https://github.com/idleberg/atom-emoji-code) and [Sublime Text](https://github.com/idleberg/sublime-emoji-code).

![Screenshot](https://raw.github.com/idleberg/vscode-emoji-code/master/screenshot.gif)

*Screenshot nicked from the Atom package, but you get the idea*

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install emoji-code`

### Packaged Extension

Download the package extension from the the [release page](https://github.com/idleberg/vscode-emoji-code/releases) and install it from the command-line:

```bash
$ code --install-extension emoji-code-*.vsix
```

### Clone Repository

Change to your Visual Studio Code extensions directory:

```bash
# Windows
$ cd %USERPROFILE%\.vscode\extensions

# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone repository as `emoji-code`:

```bash
$ git clone https://github.com/idleberg/vscode-emoji-code emoji-code
```

Install Node dependencies:

```bash
cd emoji-code
yarn || npm install
```

### Usage

All emojis are prefixed with `ji`, following the string of the official [Unicode terminology](http://unicode.org/Public/emoji/3.0/emoji-sequences.txt).

**Examples:**

Let's say, you want to insert the 😄 emoji

* HTML: `ji:grinning-face` becomes `&#x1F600;`
* CSS: `ji:grinning-face` becomes `content: '\1F600';`
* JavaScript: `ji:grinning-face` becomes `\u{1F600}`
* TypeScript: `ji:grinning-face` becomes `\u{1F600}`
* Markdown: `ji:grinning-face` becomes 😄¹
* Python: `ji:grinning-face` becomes `\U0001F600`
* Ruby: `ji:grinning-face` becomes `\u{1F600}`

¹ requires `editor.quickSuggestions` set to true for Markdown files

Keep in mind that Visual Studio Code supports fuzzy completion, inviting you to use abbreviations of your preference.

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT).

Emoji artwork by [EmojiOne](https://www.emojione.com/), licensed under a [Creative Commons Attribution International 4.0 ](https://creativecommons.org/licenses/by/4.0/legalcode) license.

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/vscode-emoji-code) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
