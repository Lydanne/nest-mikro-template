<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./nest-mikro.svg" width="auto" alt="Nest Logo" /></a>
</p>

## Description

A real one [Nest](https://github.com/nestjs/nest) framework TypeScript repository.

## Feature

- [x] MikroOrm
- [x] Mongodb
- [x] 自动验证传入参数
- [x] 自动转换传入参数
- [x] 自动生成 API 文档
- [ ] 自动生成 API 接口调用
- [x] 识别环境（prod 生产, dev 预发, local 本地开发, ..）
- [x] 自动加载环境变量
- [ ] 热重载（HMR）
- [x] API 版本管理（URL 方式）
- [x] 单元测试
- [x] E2E 测试
- [x] 支持 VSCode 单元测试
- [x] 支持 GitHook 自动 Prettier 格式化, 自动 ESlint 校验，自动校验 Commit
- [x] 无需编译直接运行模式（实验）`npm run start:native`

## VSCode Plugin Installation

```
名称: Jest
ID: orta.vscode-jest
说明: Use Facebook's Jest With Pleasure.
版本: 4.1.2
发布者: Orta
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
```

```
名称: ESLint
ID: dbaeumer.vscode-eslint
说明: Integrates ESLint JavaScript into VS Code.
版本: 2.1.25
发布者: Dirk Baeumer
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```

```
名称: Prettier - Code formatter
ID: esbenp.prettier-vscode
说明: Code formatter using prettier
版本: 8.1.0
发布者: Prettier
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# local development
$ npm run start

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Env File

```
.env        通用环境变量文件，所有环境生效，相同变量会被下面环境覆盖
.env.local  本地环境生效
.env.dev    预发环境生效
.env.prod   生产环境生效
```

> 提示：
> 需要在生产环境的服务器设置 NODE_ENV 环境变量为 prod 才能正确识别环境
> 需要在预发环境的服务器设置 NODE_ENV 环境变量为 dev 才能正确识别环境
> 如果不设置默认为本地环境

## Preset Environment Variables

```
MONGO_DEBUG = false # 是否开启MikroORM Debug
MONGO_CLIENT_URL = mongodb://localhost/hello # MONGO 链接地址

```

## Commit Lint

```
type(scope?): subject
```

### type

表示提交的类型

```
  'build',    打包构建之后
  'chore',    修改配置或者修改文件名等，相当于是其他
  'ci',       修改CI后
  'docs',     修改文档后
  'feat',     新的特性
  'fix',      修复bug
  'perf',     性能优化
  'refactor', 重构
  'revert',   重新提交
  'style',    样式相关
  'test'      测试相关
```

### scope

表示模块

### subject

做的事情

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
