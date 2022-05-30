---
title: "deno blog 로 변경하기"
publish_date: "2022-05-30"
---

### 블로그 초기화 하기

``` bash
$ deno run https://deno.land/x/blog/init.ts [블로그 디렉토리 이름]
```

이렇게 하면 다음과 같은 구조로 블로그 디렉토리가 생성되고 블로그 작성을 위한 기본 구조로 프로젝트가 생성된다.

``` bash
.
|____posts
| |____hello_world.md
|____main.ts
|____deno.jsonc
```

### 로컬에서 블로그 실행하기

아래와 같이 task 를 실행하면 개발환경의 서버가 실행된다.

``` bash
$ deno task dev
```

실제로 실행되는 명령어는 `deno.jsonc` 파일에 있는 task 가 아래와 같이 실행이 된다.
```
$ deno run --allow-net --allow-read --no-check --watch main.ts --dev
Warning deno task is unstable and may drastically change in the future
Task dev deno run --allow-net --allow-read --no-check --watch main.ts --dev
Watcher Process started.
⚠️  ️Deno requests env access to "NODE_DEBUG". Run again with --allow-env to bypass this prompt.
   Allow? [y/n (y = yes allow, n = no deny)]
```

### 블로그 글 작성하기

posts 디렉토리에 마크다운으로 블로그 글을 작성한다.

### deno deploy 에 배포하기



[deno deploy projects](https://dash.deno.com/projects) 페이지에서 새로운 프로젝트를 생성한다.