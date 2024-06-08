import { commands, type ExtensionContext, window} from 'vscode';
import { getEmojiCode, listEmojis } from './emoji';
import { insertText } from 'vscode-insert-text';

export function activate(context: ExtensionContext): void {
  context.subscriptions.push(
    commands.registerCommand('extension.emoji-code.open-palette', async () => {
      const picks = listEmojis();

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

      const emojiCode = getEmojiCode(pick.label);

      if (emojiCode instanceof Error) {
        window.showErrorMessage(emojiCode.message);
        return;
      }

      insertText(emojiCode);
    }),
  );
}
