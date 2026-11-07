import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      '.vitepress/cache',
      '.vitepress/dist',
    ],
  },
  {
    files: [
      '.vitepress/**/*',
      'docs/**/*',
    ],
    rules: {
      'node/prefer-global/process': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-undef': 'off',
    },
  },
)
