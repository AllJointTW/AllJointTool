# ESLintConfigVue

> The ESLint Config Vue Be Used For AllJointNext

## Usage

1. Installation

```sh
yarn add eslint prettier @alljoint-next/eslint-config-vue --dev
# npm install eslint prettier @alljoint-next/eslint-config-vue --save-dev
```

2. Setup Configuration

```sh
echo '{ "extends": "@alljoint-next/eslint-config-vue" }' > .eslintrc.json
echo '**/node_modules/**
./node_modules/**
**/.{git,svn,hg}/**
./.{git,svn,hg}/**
**/dist/**
./dist/**' > .eslintignore
```

3. Add Scripts
   **package.json**

```json
{
  "scripts": {
    "format": "prettier '**/*.{js,json,ts,vue,md,yaml}' !**/dist/** !./dist/** !**/coverage/** --write --no-semi --single-quote --trailing-comma none && yarn lint --fix",
    "lint": "eslint '**/*.{js,vue}'"
  }
}
```
