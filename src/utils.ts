export function isCss(languageId: string): boolean {
  return ['css', 'less', 'scss'].includes(languageId);
}

export function isHtml(languageId: string): boolean {
  return ['blade', 'html', 'jade', 'javascriptreact', 'juliamarkdown', 'markdown', 'rmarkdown', 'rmd', 'svelte', 'twig', 'typescriptreact', 'vue-html'].includes(languageId);
}

export function isJavascript(languageId: string): boolean {
  return ['coffeescript', 'javascript', 'json', 'livescript', 'typescript'].includes(languageId);
}

export function isPython(languageId: string): boolean {
  return languageId === 'python';
}

export function isRuby(languageId: string): boolean {
  return languageId === 'ruby';
}

export function isCsharp(languageId: string): boolean {
  return languageId === 'csharp';
}

export function getEnclosure(languageId: string): [string, string] {
  switch (true) {
    case isHtml(languageId):
      return ['&#x', ';'];

    case isJavascript(languageId):
      return ['\\\\u{', '}'];

    case isCss(languageId):
    case languageId === 'stylus':
      return ['\\\\', '']

    case isPython(languageId):
      return ['\\\\U', ''];

    case isRuby(languageId):
      return ['\\\\u{', '}'];

    case isCsharp(languageId):
      return ['\\u', ''];

    default:
      return ['', ''];
  }
}

export function findSurrogatePair(point: number): string[] {
  const offset = point - 0x10000;
  const lead = 0xd800 + (offset >> 10);
  const trail = 0xdc00 + (offset & 0x3ff);

  return [lead.toString(16), trail.toString(16)];
}

export function getUnicodeEntity(languageId: string, unicode: string): string {
  if (languageId === 'python') {
    return String('0000000' + unicode).slice(-8);
  } else if (languageId === 'csharp') {
    return findSurrogatePair(parseInt(unicode, 16)).join('\\u');
  }

  const [prefix, suffix] = getEnclosure(languageId);

  return `${prefix}${unicode}${suffix}`;
}
