## WebPaсk

 babel
 clean-webpack-plugin
 copy-webpack-plugin
 css-loader
 eslint-config-airbnb-base
 extract-text-webpack-plugin
 file-loader
 html-loader
 html-webpack-plugin
 mini-css-extract-plugin
 sass

---
## Запуск сборки 

development mode: npm run dev
production: npm run prod

_dev с source map и watcher;
prod с babel_

---
## Extensions

Используем расширения [Live Server](https://github.com/ritwickdey/vscode-live-server.git) и [EditorConfig](https://github.com/editorconfig/editorconfig-vscode.git) оба расширения есть в маркете VsCode

----
## Editor Config

 charset = utf-8
 indent_style = space
 indent_size = 2
 end_of_line = lf

---
## Eslint

airbnb-base config

Exceptions:
- [consistent-return](https://eslint.org/docs/rules/consistent-return)
- [no-param-reassign : { "props": false }](https://eslint.org/docs/rules/no-param-reassign)
- [import/no-cycle: 2, { "maxDepth": 1 }](https://github.com/benmosher/eslint-plugin-import/blob/v2.20.1/docs/rules/no-cycle.md)
- [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
- [camelcase: {"properties": "never", "ignoreDestructuring": true}](https://eslint.org/docs/rules/camelcase)
