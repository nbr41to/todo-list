module.exports = {
  env: {
    // 適用する環境
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  // パーサー
  parser: '@typescript-eslint/parser',
  // jsx を使います
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    // import 文でモジュールを使用します
    sourceType: 'module',
  },
  // React のバージョンは自動検出に
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    "quotes": ["warn", "single"],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
