# TO DO LIST

環境構築をしっかりやった本気の TODOLIST APP

## 使用するライブラリ・フレームワーク

- [ESLint](https://eslint.org/)
  設定したルールのもとで,コードを監視して不備を教えてくれる
- [Prettier](https://prettier.io/)
  設定したルールでコードを整地してくれる
- [Storybook](https://storybook.js.org/)
  Component 指向と相性がよく,Component の見た目を開発する際に便利
- [Chromatic](https://www.chromatic.com/)
  Storybook の内容をデプロイできる
- [styled components](https://styled-components.com/)
  言わずとしれた CSSinJS のライブラリ

### ESlint Prettier で入れたもの

```zsh
  yarn add -D eslint prettier eslint-config-prettier
```

```zsh
  yarn add -D typescript @typescript-eslint/{parser,eslint-plugin}
```

```zsh
  yarn add -D eslint-plugin-{react,react-hooks}
```

## 機能

複数の TODOLIST を作成可
完了時 Tweet 機能

### TODO の内容

- 内容
- 優先順位
- メモ
- URL

使用した Component を Chromatic でデプロイ

React Router 使わないとなんで,以下は実装するか悩み中
トップページで LP & DEMO
ログインすると TODO を保存できるようになる
ゲストログインもあり
