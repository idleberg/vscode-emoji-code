# Emoji Code

[![Version](https://img.shields.io/github/v/release/idleberg/vscode-emoji-code?style=for-the-badge)](https://github.com/idleberg/vscode-emoji-code/releases)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/idleberg.emoji-code?style=for-the-badge&label=Marketplace)](https://marketplace.visualstudio.com/items?itemName=idleberg.emoji-code)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/idleberg/emoji-code?style=for-the-badge&label=Open%20VSX)](https://open-vsx.org/extension/idleberg/emoji-code)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/vscode-emoji-code/default.yml?style=for-the-badge)](https://github.com/idleberg/vscode-emoji-code/actions)

Insert escaped Emoji code into a variety of languages, including:

- C#
- CSS
- CoffeeScript
- HTML
- JSON
- JavaScript
- Laravel Blade
- Less
- LiveScript
- Markdown
- Python
- React
- Ruby
- SCSS
- Svelte
- Twig
- TypeScript
- Vue

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

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or install it using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

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

As of version v0.13, the `Emoji Code: Open Palette` command is exposed. This allows you picking an emoji by its name or tags.

**Examples:**

Let's say, you want to insert the 😄  emoji

* HTML: `grinning face` becomes `&#x1F600;`
* CSS: `grinning face` becomes `'\1F600';`
* JavaScript: `grinning face` becomes `\u{1F600}`
* Python: `grinning face` becomes `\U0001F600`
* Ruby: `grinning face` becomes `\u{1F600}`

For unsupported languages, the emoji will be inserted as-is.

## Related

- [Atom](https://github.com/idleberg/atom-emoji-code)
- [Sublime Text](https://github.com/idleberg/sublime-emoji-code)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT).

Emoji artwork by [EmojiOne](https://www.emojione.com/), licensed under a [Creative Commons Attribution International 4.0 ](https://creativecommons.org/licenses/by/4.0/legalcode) license.
