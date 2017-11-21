'use babel';

// Dependencies
const emojiAll = require('emojibase-data/en/data.json');
const { exists, mkdirSync, writeFile } = require('fs');

// Variables & Constants
const meta = require('../package.json');
const outputDir = "snippets";
let snippets = {};

// Main
console.log(`\n${meta.name} v${meta.version}\n`);

exists(outputDir, (doesExist) => {
  if (!doesExist) {
    console.log(`\u1F4AB ./${outputDir}`);
    mkdirSync(outputDir);
  }
  writeSnippets("css", "\\\\", "");
  writeSnippets("html", "&#x", ";");
  writeSnippets("javascript", "0x", ", ");
  writeSnippets("python", "\\U", "");
  writeSnippets("ruby", "\\\\u{", "}");
});

// Functions
let writeSnippets = (type, prefix, suffix) => {

    for (let i = 0; i < emojiAll.length; i++) {
        let emoji, json, name, output, unicode;

        if (typeof emojiAll[i].name != 'undefined' && emojiAll[i].name !== null ) {
            name = emojiAll[i].name.toLowerCase().replace(/[\s,\.]+/g, "-");
        } else {
            name = emojiAll[i].short_name;
        }

        unicodes = emojiAll[i].hexcode.split("-");

        unicodes.forEach(function(unicode, index) {
          if (type === 'python') {
            unicode = String("0000000" + unicode).slice(-8);
          }
          unicodes[index] = `${prefix}${unicode}${suffix}`;
        });

        unicode = unicodes.join('');
        emoji = emojiAll[i].emoji;

        switch (type) {
          case 'css':
            unicode = `content: '${unicode}';`;
            break;
          case 'javascript':
            unicode = unicode.slice(0, -2);
            break;
        }

        snippets[emoji] = {
            "body": `${unicode}`,
            "prefix": `ji:${name}`,
            "description": emoji
        };
    }

    // Object to JSON
    output = JSON.stringify(snippets, null, 2);

    // Save file
    writeFile(`${outputDir}/emoji-${type}.json`, output, (err) => {
      let status;

      if (err) {
        status = '\u274C';
      } else {
        status = '\u2705';
      }

      console.log(`${status}  emoji-${type}.json`);
    });
}