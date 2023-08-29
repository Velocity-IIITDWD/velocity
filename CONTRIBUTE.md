# Contributing Guidelines

## Making a Pull Request [PR]

Refer to the official docs to create a pull request - [GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Code Style | Formatting

Maintaining code consistency is vital, as it improves code understanding, readability, and overall appearance.

We are using ‘Prettier’ formatter to format our codebase. Make sure you have it installed and you have 'Format on Save' on.



Read more at [Prettier Docs](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code).

## RULES

### Pull before you change

Before making any changes to the codebase, it is important to make sure that you have the latest version of the code. Since we are working on the dev branch, running ‘git pull upstream dev’ ensures that you have the updated code. This will help prevent conflicts with other contributions and ensure that your changes are based on the most recent version of the code.         

### Branch naming

It is a good practice to name the branch that you are working on with a descriptive name that is related to the changes that you are making. For example, if you are working on the logo of the website, you can name the branch updatingLogo or if you are fixing a bug, you could name the branch bugfix/login-error.

### PR Description

It is important to provide a clear and concise description of the changes that you are making. This makes it easier for others to understand the changes that you are making and to review your code. It is also a good practice to add screenshots in the description to show the changes that you are making. Also, make sure that you are making a PR in the dev branch of the repository.

### Commit message

A clear and concise commit message is important for maintaining the project's history and making it easier for others to understand the changes that were made. It is a good practice to prefix the commit message with the type of change, for example, feat: for a new feature, fix: for a bug fix, and docs: for documentation changes. For example, a commit message for a bug fix could be fix: resolved issue with login functionality and for a new feature, it could be feat: added new dashboard to track user data.

### Variable naming

It is important to use descriptive names for variables, functions, and other identifiers. This makes it easier to understand the code and to find and fix bugs. It is also a good practice to use camelCase for variable names and PascalCase for component names.

### Comments

Comments are important for explaining the code and for making it easier to understand. It is a good practice to add comments to explain the purpose of the code and to add comments to explain any complex logic. It is also a good practice to add comments to explain any workarounds or hacks that were used to fix bugs or to implement a specific feature

### Folder structure

Maintaining a consistent and logical folder structure is important for keeping the codebase organized and easy to navigate. It is a good practice to create a separate folder for each component or feature and to keep related files, such as styles and tests, in the same folder. For example, you could have a components folder that contains subfolders for each component, such as header, footer, sidebar, etc. and each subfolder should contain all the related files for that component like index.js, styles.css and test.js
