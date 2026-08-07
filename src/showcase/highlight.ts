import hljs from 'highlight.js/lib/common'

interface Block {
  lang: string
  content: string
  pre?: string
}

function blockRegex(label: string): RegExp {
  return new RegExp(`(<${label}(?:\\s[^>]*)?>)`, 'i')
}

function splitSfc(src: string): Block[] {
  const blocks: Block[] = []
  let rest = src
  const labels = ['template', 'script', 'style']
  const firsts = labels
    .map((l) => ({ l, i: rest.search(blockRegex(l)) }))
    .filter((x) => x.i >= 0)
    .sort((a, b) => a.i - b.i)

  if (firsts.length === 0) return [{ lang: 'vue', content: src }]
  const head = rest.slice(0, firsts[0].i)
  if (head.trim()) blocks.push({ lang: 'vue', content: head })
  rest = rest.slice(firsts[0].i)

  const bodyRe = /<\/script\s*>|<\/style\s*>|<\/template\s*>/i
  while (rest.trim()) {
    const f = labels
      .map((l) => ({ l, i: rest.search(blockRegex(l)) }))
      .filter((x) => x.i >= 0)
      .sort((a, b) => a.i - b.i)[0]
    if (!f) break
    const openMatch = rest.slice(f.i).match(blockRegex(f.l))
    if (!openMatch) break
    const openLen = f.i + openMatch[0].length
    const close = rest.slice(openLen).search(bodyRe)
    if (close < 0) {
      blocks.push({ lang: f.l === 'template' ? 'html' : f.l, pre: rest.slice(0, f.i), content: rest.slice(openLen) })
      break
    }
    blocks.push({
      lang: f.l === 'template' ? 'html' : f.l,
      pre: rest.slice(0, f.i) + openMatch[0],
      content: rest.slice(openLen, openLen + close) + rest.slice(openLen + close).match(bodyRe)![0],
    })
    rest = rest.slice(openLen + close).replace(bodyRe, '')
  }

  return blocks
}

export function highlightSfc(src: string): string {
  return splitSfc(src)
    .map((b) => {
      const lang =
        b.lang === 'vue' ? 'html' : b.lang === 'script' ? 'javascript' : b.lang === 'style' ? 'css' : b.lang
      const body = hljs.highlight(b.content, { language: lang, ignoreIllegals: true }).value
      return b.pre ? hljs.highlight(b.pre, { language: 'html', ignoreIllegals: true }).value + body : body
    })
    .join('')
}
