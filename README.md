# AllJointNext
> The Next Generation AllJointJS.

## Contributing Guide
### Pull Request Guidelines
* Must Follow the [GitHub Flow](https://guides.github.com/introduction/flow/).

* Checkout a topic branch from a base branch, e.g. master, and merge back against that branch.

* If adding a new feature:
  * Add accompanying test case. Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

* If fixing bug:
  * If you are resolving a special issue, add (fix #xxxx[,#xxxx]) (#xxxx is the issue id) in your PR title for a better release log, e.g. update entities encoding/decoding (fix #3899).
  * Provide a detailed description of the bug in the PR. Live demo preferred.
  * Add appropriate test coverage if applicable. You can check the coverage of your code addition by running yarn test --coverage.

* It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

* Make sure tests pass!

* Commit messages must follow the [commit message convention](https://www.conventionalcommits.org/en/v1.0.0/) so that changelogs can be automatically generated. Commit messages are automatically validated before commit (by invoking Git Hooks via husky).

* No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with ESLint and Prettier on commit (by invoking Git Hooks via husky).

* Beware of the git GUI, make sure the husky working fine before you commit.
  *  Sourcetree app on macOS, must open via command line.
    ```sh
    open /Applications/Sourcetree.app
    # or
    stree your-folder-name
    ```

### Prior Knowledge
* lerna (monorepo)
  * https://github.com/lerna/lerna/blob/master/README.md

* yarn workspace
  * https://classic.yarnpkg.com/en/docs/workspaces
  * https://classic.yarnpkg.com/en/docs/cli/workspace
  * https://classic.yarnpkg.com/blog/2018/02/15/nohoist

### Common Scripts
**project**
```sh
# add the new project
yarn lerna add your-project-name --independent
```

**package**
```sh
# install all packages
yarn install

# add the npm package in whole workspace
yarn add your-package-name --ignore-workspace-root-check # alternative yarn add your-package-name -W

# add the npm package in special workspace
yarn workspace your-workspace-name add your-package-name
```
