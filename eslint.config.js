// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: true,
    files: ['**/*.ts', '**/*.vue', '**/*.md'],
  }),
)
