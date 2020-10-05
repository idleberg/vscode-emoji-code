# Emoji Code

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-emoji-code)](https://github.com/idleberg/vscode-emoji-code/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.emoji-code.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.emoji-code)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/vscode-emoji-code)](https://circleci.com/gh/idleberg/vscode-emoji-code)
[![David](https://flat.badgen.net/david/dep/idleberg/vscode-emoji-code)](https://david-dm.org/idleberg/vscode-emoji-code)

Snippets to insert escaped Emoji code into a variety of languages, including:

- C#
- CSS
- CoffeeScript
- HTML
- JSON
- JavaScript
- Laravel Blade
- LiveScript
- Markdown
- Python
- React
- Ruby
- Svelte
- Twig
- TypeScript
- Vue

This package is also available for [Atom](https://github.com/idleberg/atom-emoji-code) and [Sublime Text](https://github.com/idleberg/sublime-emoji-code).

![Screenshot](https://raw.github.com/idleberg/vscode-emoji-code/master/screenshot.gif)

*Screenshot nicked from the Atom package, but you get the idea*

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install idleberg.emoji-code`

### CLI

With [shell commands](https://code.visualstudio.com/docs/editor/command-line) installed, you can use the following command to install the extension:

`$ code --install-extension idleberg.emoji-code`

### Packaged Extension

Download the packaged extension from the the [release page](https://github.com/idleberg/vscode-emoji-code/releases) and install it from the command-line:

```bash
$ code --install-extension path/to/emoji-code-*.vsix
```

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

```bash
$ ovsx get idleberg.emoji-code
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
* Markdown: `ji:grinning-face` becomes 😄¹
* Python: `ji:grinning-face` becomes `\U0001F600`
* Ruby: `ji:grinning-face` becomes `\u{1F600}`

¹ requires `editor.quickSuggestions` set to true for Markdown files

Keep in mind that Visual Studio Code supports fuzzy completion, inviting you to use abbreviations of your preference.

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT).

Emoji artwork by [EmojiOne](https://www.emojione.com/), licensed under a [Creative Commons Attribution International 4.0 ](https://creativecommons.org/licenses/by/4.0/legalcode) license.
