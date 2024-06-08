import emojiAll from 'emojibase-data/en/data.json' assert { type: 'json' };;
import { getUnicodeEntity } from './utils';
import { window } from 'vscode';

export function listEmojis() {
  if (!window.activeTextEditor) {
    return new Error('No active text editor.')
  }

  return emojiAll.map(({ emoji, label, tags }) => {

   return {
     description: label,
     detail: tags?.length ? `Tags: ${tags.join(', ')}` : undefined,
     label: emoji,
    };
  });
}

export async function getEmojiCode(emoji: string, languageId: string): Promise<string | Error> {
  const result = emojiAll.find(emojiItem => emojiItem.emoji === emoji);

  if (!result) {
    return new Error(`Emoji not found: ${emoji}`);
  }

  const hexcodes = result.hexcode.split('-');
  const entities = hexcodes.map((unicode) => getUnicodeEntity(languageId, unicode));
  const body = entities.join('');

  return body;
}
