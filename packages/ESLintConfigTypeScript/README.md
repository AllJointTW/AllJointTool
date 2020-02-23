# ESLintConfigTypeScript
> The ESLint Config Be Used For AllJointNext

## Usage
1. Installation 
```sh
yarn add eslint prettier typescript @alljoint-next/eslint-config-typescript --dev
# npm install eslint prettier typescript @alljoint-next/eslint-config-typescript --save-dev
```

2. Setup Configuration
```sh
echo '{ "extends": "@alljoint-next/eslint-config-typescript" }' > .eslintrc.json
```

3. Add Scripts
package.json
```json
  "scripts": {
    "format": "prettier src/index.js --write && yarn lint --fix",
    "lint": "eslint src/index.js"
  },
```
