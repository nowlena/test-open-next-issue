module.exports = {
  extends: ['next', '../../../.eslintrc.js'],
  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['!**/*'],
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
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
