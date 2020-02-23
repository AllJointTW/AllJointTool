# ESLintConfigTypeScript
> The ESLint Config Be Used For AllJointNext

## Usage
1. Installation 
```sh
yarn add eslint prettier typescript @alljoint-next/eslint-config-typescript --dev
# npm install eslint prettier typescript @alljoint-next/eslint-config-typescript --save-dev

# install the ts-config we suggest or you can add specific .tsconfig by yourself
yarn add @alljoint-next/ts-config --dev
# npm install @alljoint-next/ts-config --save-dev
```

2. Setup Configuration
```sh
echo '{ "extends": "@alljoint-next/eslint-config-typescript" }' > .eslintrc.json
echo '**/node_modules/**
./node_modules/**
**/.{git,svn,hg}/**
./.{git,svn,hg}/**
**/dist/**
./dist/**' > .eslintignore
echo '{ "extends": "@alljoint-next/ts-config" }' > tsconfig.json
```

3. Add Scripts
**package.json**
```json
{
  "scripts": {
    "format": "prettier **/*.{js,json,ts,md,yaml} !**/dist/** !./dist/** --write && yarn lint --fix",
    "lint": "eslint **/*.ts"
  }
}
```
