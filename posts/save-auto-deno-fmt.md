---
title: "How to auto-format deno project files"
publish_date: "2022-06-06"
snippet: "deno 프로젝트 파일들을 자동으로 코드정렬 해주는 방법"
---

deno 는 cli 에서 기본으로 fmt 명령어를 지원해서 따로 패키지 설치 없이 코드 정렬및 수정을 할 수 있다.

## 지원하는 파일

| File Type  | Extension      |
| ---------- | -------------- |
| JavaScript | .js            |
| TypeScript | .ts            |
| JSX        | .jsx           |
| TSX        | .tsx           |
| Markdown   | .md, .markdown |
| JSON       | .json          |
| JSONC      | .jsonc         |

## 명령어 사용 방법

프로젝트 폴더에서 아래와 같이 명령어를 입력하면 현재 프로젝트에 있는 모든 파일들을 검사하고 수정한다.

```bash
$ deno fmt
```

아래와 같이 fmt 명령어 뒤에 파일명을 지정하면 해당 파일만 검사하고 수정한다.

```bash
$ deno fmt myfile1.ts myfile2.ts
```

아래와 같이 fmt 명령어 뒤에 디렉토리를 지정하면 해당 디렉토리에 있는 모든 파일을 검사하고 수정한다.

```bash
$ deno fmt src/
```

아래와 같이 fmt 명령어 뒤에 --check 옵션을 주면 아래와 같이 수정해야 할 파일을 찾아서 내용을 보여준다.

```bash
$ deno fmt --check

from /Users/sean/Github/deno_study/main.ts:
 4 | -    console.log(`got ${e.type} event in event handler (main)`);
 4 | +  console.log(`got ${e.type} event in event handler (main)`);
12 | -    console.log(`got ${e.type} event in onload function (main)`);
12 | +  console.log(`got ${e.type} event in onload function (main)`);

error: Found 1 not formatted file in 5 files
```

아래와 같이 명령어를 입력하면 main.ts 파일의 내용을 수정해서 출력해 준다.

```bash
$ cat main.ts | deno fmt -
```

## 특정 코드 또는 파일 무시 하는 방법

코드를 작성하다 보면 특정 코드는 무시하고 싶은 경우들이 있다. 그런 경우 아래와 같이 코드 위에 작성해주면 해당 코드를 무시 한다.

```ts
// deno-fmt-ignore
export const identity = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
];
```

파일 전체를 무시하고 싶은 경우는 아래와 같이 파일 상단에 작성해준다.

```ts
// deno-fmt-ignore-file
import "./imported.ts";

const handler = (e: Event): void => {
    console.log(`got ${e.type} event in event handler (main)`);
};

globalThis.addEventListener("load", handler);

globalThis.addEventListener("unload", handler);

globalThis.onload = (e: Event): void => {
    console.log(`got ${e.type} event in onload function (main)`);
};

globalThis.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (main)`);
};

console.log("log from main script");
```

## 설정 변경

문서에는 아래와 같이 기본 옵션을 유지하는 것이 좋다고 나와 있다.

| It is recommended to stick with default options.

만약 설정을 바꾸고 싶다면 다음과 같이 `deno.json` 또는 `deno.jsonc` 파일에서 아래와 같이 설정을 변경할 수 있다.

```json
{
  "compilerOptions": {
    "allowJs": true,
    "lib": ["deno.window"],
    "strict": true
  },
  "lint": {
    "files": {
      "include": ["src/"],
      "exclude": ["src/testdata/"]
    },
    "rules": {
      "tags": ["recommended"],
      "include": ["ban-untagged-todo"],
      "exclude": ["no-unused-vars"]
    }
  },
  "fmt": {
    "files": {
      "include": ["src/"],
      "exclude": ["src/testdata/"]
    },
    "options": {
      "useTabs": true,
      "lineWidth": 80,
      "indentWidth": 4,
      "singleQuote": true,
      "proseWrap": "preserve"
    }
  }
}
```

[문서 참고](https://deno.land/manual/getting_started/configuration_file)

## vscode 설정으로 파일 저장시 자동으로 포멧팅 하기

위에서 알아본 방법은 cli 명령어를 항상 입력해야 하는 번거로움이 있다. 그래서 vscode 로 저장할 때 자동으로 수정하는 방법을 알아보자.

### .vscode 디렉토리 생성

해당 프로젝트에 .vscode 디렉토리 가 없다면 디렉토리를 생성한다.

### settings.json 파일 생성

.vscode 디렉토리 안에 settings.json 파일을 생성한다.

### 설정 내용 추가

아래 내용을 추가 해주면 저장할 때 deno fmt 명령어를 쓴것 처럼 자동으로 수정 해주면서 저장이 된다.

```js
{
  "deno.enable": true,
  "deno.lint": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "denoland.vscode-deno"
}
```
