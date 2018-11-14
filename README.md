# @blankapp/plugin-i18n

English | [简体中文](./README.zh_CN.md)

## Introduction

A cross-platform I18n plugin for your React Native app.

### Features

- ...

## Quick Start

### Installation

Install `@blankapp/plugin-i18n` and link in your project:

```bash
$ yarn add @blankapp/plugin-i18n
```

Or

```
$ yarn add git+https://github.com/blankapp/plugin-i18n
```

Now, simply copy the following to your index.js file of React Native project:

```js
import I18n, { t } from '@blankapp/plugin-i18n';

const defaultLanguages = {
  'en-GB': {
    hello: 'Hello world',
    welcome: 'Welcome, Mr. __ name__',
  },
  'zh-Hans': {
    hello: '你好，世界',
    welcome: '欢迎光临，__name__先生',
  },
};

I18n.register(defaultLanguages);
I18n.useLocale('zh-Hans');
I18n.useFallbackLocale('en-GB');

const message1 = t('hello'); // 你好，世界
const message2 = t('welcome', { name: '张三' }); // 欢迎光临，张三先生
```

## License

```text
MIT License

Copyright (c) 2018 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
