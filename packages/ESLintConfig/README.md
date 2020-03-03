# ESLintConfig

> The ESLint Config Be Used For AllJointNext

## Usage

1. Installation

```sh
yarn add eslint prettier @alljoint-next/eslint-config --dev
# npm install eslint prettier @alljoint-next/eslint-config --save-dev
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
    "format": "prettier **/*.{js,json,ts,md,yaml} !**/dist/** !./dist/** --write --no-semi --single-quote && yarn lint --fix",
    "lint": "eslint **/*.js"
  }
}
```
