# ESLintConfig

> The ESLint Config Lite Be Used For AllJointNext (without jest)

## Usage

1. Installation

```sh
yarn add eslint prettier @alljoint-next/eslint-config-lite --dev
# npm install eslint prettier @alljoint-next/eslint-config-lite --save-dev
```

2. Setup Configuration

```sh
echo '{ "extends": "@alljoint-next" }' > .eslintrc.json
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
    "format": "prettier '**/*.{js,json,ts,vue,md,yml,yaml}' !**/dist/** !./dist/** !**/coverage/** --write --no-semi --single-quote --trailing-comma none && yarn lint --fix",
    "lint": "eslint '**/*.js'"
  }
}
```
