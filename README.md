English | [简体中文](./README-zh.md)
<hr>

A simple program to get leetcode daily questions, currently only support to get question under the leetcode.cn
+ simple, easy to use
+ no runtime dependencies
## Use Cases
### install
``` shell
npm install leetcode-daily-question
```
### Get the daily question
```ts
import {getTodayQuestion} from 'leetcode-daily-question';
getTodayQuestion()
.then(response => console.log(response))
.catch(err => console.error(err));
```
### Get the title according to the title
```ts
import {getQuestionByTitleId} from 'leetcode-daily-question';
const titleId = 'two-sum';
getQuestionByTitleId()
.then(response => console.log(response))
.catch(err => console.error(err));
```
