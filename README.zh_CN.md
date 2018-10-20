# @blankapp/plugin-i18n

[English](./README.zh_CN.md) | 简体中文

## Introduction

适用于 React Native 应用程序的跨平台国际化（I18n）插件。

## 特性

- ...

## 快速开始

### 安装

安装 `@blankapp/plugin-i18n` 到你的项目

```bash
$ yarn add @blankapp/plugin-i18n
```

或

```
$ yarn add git+https://github.com/blankapp/plugin-i18n
```

### 链接

Coming soom

## 基本用法

现在，只需将以下内容复制到React Native项目的index.js文件中：
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

## 许可证

```text
MIT License

Copyright (c) 2017 JianyingLi <lijy91@foxmail.com>

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
