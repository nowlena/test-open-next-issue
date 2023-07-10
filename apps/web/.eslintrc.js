module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    '../../.eslintrc.js',
  ],
  ignorePatterns: ['!**/*', '.next'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        babelOptions: {
          presets: [require.resolve('next/babel')],
        },
      },
      rules: {
        '@next/next/no-html-link-for-pages': 'off',
      },
    },
  ],
};
