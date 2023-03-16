# Welcome to the Grid Dynamics JavaScript Internship repo

End-to-end testing is an increasingly popular way to test applications against complex operations, UI states, mobile-friendly views, and more.

The move to cloud computing has highlighted the importance of Application Programming Interfaces. API testing is a necessity with the rise in cloud applications and interconnect platforms.

The purpose of this project is to learn and create E2E and API Testing frameworks with Cypress and Playwright

## Overview

This project is a mono repo created using [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/). It includes `webapp`, containing the React app, `cypress` containing the Cypress scripts for end-to-end testing, `playwright` containing Playwright scripts for end-to-end testing.

## Prerequisites

- Node version: 14.17
- NPM version: 6.14.13
- Yarn version: 1.22.19

## VSCode

This project is a [VS Code workspace](https://code.visualstudio.com/docs/editor/workspaces). Configuration file is available here:

```shell
.vscode/qa-js-internship.code-workspace
```

Open workspace using the File menu and selecting 'Open workspace from a file...'. Alternatively if you launch VS Code from a terminal, you can pass the path to a folder as the first argument to the code command for opening.

## Installing the project

```shell
yarn install
```

## Web application under test

We use Cypress [Real World Application](https://www.cypress.io/blog/2020/06/11/introducing-the-cypress-real-world-app/) purely for demonstration and educational purposes. Use this app to learn, experiment, tinker, and practice application testing with different test frameworks.

Make sure to qualify for the [Prerequisite](./webapp/README.md#Prerequisites).
Start Web application with [Run the app](./webapp/README.md#Run-the-app).

### Start Web application

```shell
yarn webapp:start
```

## Cypress

**Cypress** is a Front end automation framework.

Extensive documentation can be found [here](https://docs.cypress.io/guides/overview/why-cypress)

### Execute Cypress E2E tets

```shell
yarn cypress:e2e
```

### Execute Cypress API tets

```shell
yarn cypress:api
```

## PlayWright

**PlayWright** is a Front end automation framework.

Extensive documentation can be found [here](https://playwright.dev/docs/intro)

### Execute PlayWright E2E tets

```shell
yarn playwright:e2e
```

### Execute PlayWright API tets

```shell
yarn playwright:api
```

## Supertest

**SuperTest** is a module to provide a high-level abstraction for testing HTTP

Documentation can be found [here](https://github.com/visionmedia/supertest)

### Execute Supertest API tets

```shell
yarn supertest:api
```

## Tasks

In this section, you can find tasks we expect in your assignment from the **Automation Tests** standpoint. We expect you to cover test scenarios specified **Tasks** folder using Cypress and Playwright frameworks.

- E2E Automation Tests: [Tasks](./tasks/end-to-end.md)
- API Automation Tests: [Tasks](./tasks/api.md)

## For Mac M1 users

To run the project on the M1 Mac laptop, som extra preparation is required.
**Prerequisites:**

- Brew package manager
- ZSH terminal (default for VSCode)

```shell
brew install chromium
```

```shell
cd /Applications/ && xattr -rc Chromium.app
```

```shell
echo -e \nexport PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \nexport PUPPETEER_EXECUTABLE_PATH=`which chromium` >> ~/.zshrc
```

At this stage you must restart the terminal so the new settings are applied. After that proceed with installation

```shell
yarn install
```
