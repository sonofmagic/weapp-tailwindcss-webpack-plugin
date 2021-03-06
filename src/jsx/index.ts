import { parse, traverse, generate } from '@/babel'
import type { Replacer } from './replacer'

export function jsxHandler (rawSource: string, replacer: Replacer) {
  const ast = parse(rawSource, {
    sourceType: 'unambiguous'
  })

  traverse(ast, {
    enter (path) {
      replacer(path)
    },
    noScope: true
  })
  //, {
  // sourceMaps: true
  // sourceFileName
  // }
  return generate(ast)
}
