<h1 align="center">Create Example</h1>

<p align="center">
	Example of a template repository built with Bingo.
	💝
</p>

<p align="center">
	<a href="https://github.com/bingo-examples/create-example/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/bingo-examples/create-example" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/bingo-examples/create-example?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/bingo-examples/create-example/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/create-example"><img alt="📦 npm version" src="https://img.shields.io/npm/v/create-example?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npx create-example
```

This repository is a general example of using the [Bingo engine](https://create.bingo).
Its `src/template.ts` file describes a repository with four string options:

- `description`: 'Sentence case.' description of the repository, with a hardcoded value
- `owner`: GitHub organization or user the repository is underneath
- `repository`: 'kebab-case' or 'PascalCase' title of the repository
- `title`: 'Title Case' title for the repository, with a default value based on title-casing `repository`

The following command was used to generate [bingo/created-example](https://github.com/created-example):

```shell
npx create-example --owner bingo-examples --repository created-example
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
