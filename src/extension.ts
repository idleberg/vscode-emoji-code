import { commands, type ExtensionContext, window} from 'vscode';
import { getEmojiCode, listEmojis } from './emoji';
import { insertText } from 'vscode-insert-text';
import memoize from 'nano-memoize';
import { allLanguages } from './utils';

const memoListEmojis = memoize(listEmojis);
const memoEmojiCode = getEmojiCode;

export function activate(context: ExtensionContext): void {
  context.subscriptions.push(
    commands.registerCommand('extension.emoji-code.open-palette', async () => {
      const textEditor = window.activeTextEditor;

      if (!textEditor) {
        return new Error('No active text editor.')
      }

      const languageId: string | undefined = textEditor.document.languageId;

      const picks = memoListEmojis();

      if (picks instanceof Error) {
        window.showErrorMessage(picks.message);
        return;
      }

      const pick = await window.showQuickPick(picks, {
        matchOnDescription: true,
        matchOnDetail: true,
      });

      if (!pick?.label) {
        window.showErrorMessage('No emoji selected.')
        return;
      }

      if (!allLanguages.includes(languageId)) {
        return insertText(pick.label);
      }

      const emojiCode = await memoEmojiCode(pick.label, languageId);

      if (emojiCode instanceof Error) {
        window.showErrorMessage(emojiCode.message);
        return;
      }

      insertText(emojiCode);
    }),
  );
}
