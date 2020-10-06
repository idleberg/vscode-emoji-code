'use babel';

// Dependencies
const emojiAll = require('emojibase-data/en/data.json');
const { constants, promises: fs } = require('fs');

// Variables & Constants
const meta = require('../package.json');
const outputDir = 'snippets';
let snippets = {};

// Main
(async() => {
  console.log(`\n${meta.name} v${meta.version}\n`);

  try {
    await fs.access(outputDir, constants.D_OK);
  } catch (e) {
    await fs.mkdir(outputDir);
  }

  writeSnippets('css', '\\\\');
  writeSnippets('html', '&#x', ';');
  writeSnippets('javascript', '\\\\u{', '}');
  writeSnippets('markdown');
  writeSnippets('python', '\\\\U');
  writeSnippets('ruby', '\\\\u{', '}');
  writeSnippets('csharp', '\\u');
})();

// Function
function findSurrogatePair(point) {
  // http://crocodillon.com/blog/parsing-emoji-unicode-in-javascript
  // assumes point > 0xffff
  const offset = point - 0x10000,
      lead = 0xd800 + (offset >> 10),
      trail = 0xdc00 + (offset & 0x3ff);

  return [lead.toString(16), trail.toString(16)];
}

async function writeSnippets(type, prefix = '', suffix = '') {
    for (let i = 0; i < emojiAll.length; i++) {
        let emoji, name, unicode;

        if (typeof emojiAll[i].annotation != 'undefined' && emojiAll[i].annotation !== null ) {
            name = emojiAll[i].annotation.toLowerCase().replace(/[\s,\.]+/g, '-');
        } else {
            name = emojiAll[i].short_name;
        }

        unicodes = emojiAll[i].hexcode.split('-');

        unicodes.map((unicode, index) => {
          if (type === 'python') {
            unicode = String('0000000' + unicode).slice(-8);
          } else if (type === 'csharp') {
            unicode = findSurrogatePair(parseInt(unicode, 16)).join('\\u');
          }
          unicodes[index] = `${prefix}${unicode}${suffix}`;
        });

        unicode = unicodes.join('');
        emoji = emojiAll[i].emoji;

        switch (type) {
          case 'css':
            unicode = `content: '${unicode}';`;
            break;
          case 'markdown':
            unicode = emoji
            break;
        }

        snippets[emoji] = {
            'body': `${unicode}`,
            'prefix': `ji:${name}`,
            'description': emoji
        };
    }

    // Object to JSON
    output = JSON.stringify(snippets, null, 2);

    // Save file
    let status;

    try {
      await fs.writeFile(`${outputDir}/emoji-${type}.json`, output);
      status = '\u2705';
    } catch (error) {
      status = '\u274C';
    }

    console.log(`${status}  emoji-${type}.json`);
}
