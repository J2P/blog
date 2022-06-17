---
title: "Using different deno versions"
publish_date: "2022-06-11"
snippet: "deno 의 여러버전을 사용할 수 있는 방법"
---

deno 의 새로운 버전이 나왔을 때 이전 버전과 어떤것이 달라졌는 지 확인을 해보고 싶은 경우, 또는 개발 시 필요한 버전이 다른 경우 버전을
편하게 변경 하는 방법을 찾아봤다.

## deno upgrade 를 사용해서 버전 변경

간단하게는 deno cli 를 사용해서 upgrade 를 할 때 옵션으로 --version 을 써주게 되면 해당 버전이 설치가 된다.

```bash
$ deno upgrade --version 1.22.0
Checking https://github.com/denoland/deno/releases/download/v1.22.0/deno-aarch64-apple-darwin.zip
29.6 MiB / 29.6 MiB (100.0%)
Deno is upgrading to version 1.22.0
Archive:  /var/folders/l2/g5x8dzcn21vft27bq9pc5k400000gn/T/.tmpS4Fxar/deno.zip
  inflating: deno
Upgraded successfully
```

버전을 확인해보면 아래와 같이 1.22.0 을 사용할 수 있게 되었다.

```bash
deno --version
deno 1.22.0 (release, aarch64-apple-darwin)
v8 10.0.139.17
typescript 4.6.2
```

deno upgrade 를 사용하는 방법은 해당 버전을 한번 설치했어도 다른 버전을 설치했다가 다시 설치하게 되면 또 다운로드를 받게 된다. 이
방법은 여러 버전의 deno 실행 파일을 가지고 있는 상태가 아니라서 매번 설치하고 여러 프로젝트에서 다른 버전을 사용할 경우 어려움이 있을 거
같다.

## dvm 을 사용해서 버전 변경

### 설치 방법

```bash
curl -fsSL https://deno.land/x/dvm/install.sh | sh
```

### 사용 방법

```bash
dvm --help
dvm 1.7.0
Deno Version Manager - Easy way to manage multiple active deno versions.

USAGE:
    dvm <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    activate       Activate Dvm
    alias          Set or unset an alias
    completions    Generate shell completions
    deactivate     Deactivate Dvm
    doctor         Fixing dvm specific environment variables and other issues
    help           Print this message or the help of the given subcommand(s)
    info           Show dvm info.
    install        Install deno executable to the given version. [aliases: i, add]
    list           List installed versions, matching a given <version> if provided [aliases: ls,
                       ll, la]
    list-remote    List released versions [aliases: lr, ls-remote]
    uninstall      Uninstall a given version [aliases: un, unlink, rm, remove]
    use            Use a given version or a semver range or a alias to the range.

EXAMPLE:
  dvm install 1.3.2     Install v1.3.2 release
  dvm install           Install the latest available version
  dvm use 1.0.0         Use v1.0.0 release
  dvm use latest        Use the latest alias that comes with dvm, equivalent to *
  dvm use ^1.0.0        Use 1.x version (~1.0.0, >=1.0.0 are supported as well)

NOTE:
  To remove, delete, or uninstall dvm - just remove the `$DVM_DIR` folder (usually `~/.dvm`)
```

## asdf 를 사용해서 버전 변경

### asdf 설치

mac 을 쓰고 있어서 brew 로 설치한다.

```bash
$ brew install asdf
```

### asdf deno plugin 설치

아래와 같이 deno plugin 을 설치하기 위해서 plugin 을 확인 할 수 있다.

```bash
$ asdf plugin-list-all | grep deno
deno                         *https://github.com/asdf-community/asdf-deno.git
```

위에서 나온 url로 deno plugin 을 설치한다.

```bash
$ asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git
```

### deno 버전 설치

아래와 같은 명령어로 필요한 버전의 deno 를 설치한다.

```bash
$ asdf install deno 1.23.0
$ asdf install deno 1.22.3
```

### deno 버전 변경

버전 설정 방법은 아래와 같은 명령어로 쉽게 변경할 수 있다. global 옵션을 주면 글로벌하게 deno 이 버전을 변경 할 수 있다.

```bash
$ asdf global deno 1.23.0
```

또는 해당 프로젝트 디렉토리에서는 다른 버전을 쓰고 싶다면 아래와 같이 변경할 수 있다.

```bash
$ asdf local deno 1.22.3
```

## 결론

나는 asdf 가 제일 좋은 거 같다는 생각이다. 여러 버전을 쉽게 설치하고 쉽게 변경 할 수 있고, 특정 프로젝트에서 사용할 버전을 다르게
설정 할 수도 있어서 좋다고 생각한다.

## 참고

- [deno updating](https://deno.land/manual/getting_started/installation#updating)
- [dvm GitHub](https://github.com/justjavac/dvm)
- [asdf getting started](https://asdf-vm.com/guide/getting-started.html)
