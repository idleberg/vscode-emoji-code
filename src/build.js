'use babel'

// Dependencies
const EmojiData = require('emoji-data-2016');
const fs = require('fs');

// Variables & Constants
const meta = require('../package.json');
const outputDir = "snippets";
const emojiAll = EmojiData.all();
var snippets = {};

// Main
console.log(`${meta.name} v${meta.version}\nThe MIT License\n`);

fs.exists(outputDir, (exists) => {
  if (!exists) {
    console.log(`\u1F4AB ./${outputDir}`);
    fs.mkdirSync(outputDir);
  }
  writeSnippets("css", "content: '\\\\", "';");
  writeSnippets("html", "&#x", ";");
  writeSnippets("javascript", "\\\\u", "");
  writeSnippets("python", "print(u'\\U", "')");
  writeSnippets("ruby", "\\\\u{", "}", "");
});

// Functions
function writeSnippets(type, prefix, suffix) {
    for (var i = 0; i < emojiAll.length; i++) {
        var emoji, json, name, output, unicode;

        if (typeof emojiAll[i].name != 'undefined' && emojiAll[i].name !== null ) {
            name = emojiAll[i].name.toLowerCase().replace(/\s/g, "-");
        } else {
            name = emojiAll[i].short_name;
        }

        unicode = emojiAll[i].unified.replace(/-/g, prefix);
        emoji = emojiAll[i].render();

        if (type === "python") {
          unicode = String("0000000" + unicode).slice(-8);
        }

        snippets[emoji] = {
            "body": `${prefix}${unicode}${suffix}`,
            "prefix": `ji:${name}`
        };
    }

    // Object to JSON
    output = JSON.stringify(snippets, null, 2);

    // Save file
    fs.writeFile(`${outputDir}/emoji-${type}.json`, output, (err) => {
      if (err)throw err;
      console.log(`\u2705  emoji-${type}.json`);
    });
}