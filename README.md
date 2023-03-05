# Vue Storefront Layer0 Example

This Vue Storefront app uses CommerceTools and is configured to deploy on Layer0.

## Demo

https://layer0-docs-layer0-vue-storefront-commercetools-example-default.layer0.link/

## Try It Now

[![Deploy with Layer0](https://docs.layer0.co/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/layer0-docs/layer0-vue-storefront-commercetools-example)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/layer0-docs/layer0-vue-storefront-commercetools-example.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
yarn install
```

### Update CommerceTools credentials

### Run the Vue StoreFront app locally on Layer0

In `middleware.config.js` update the CommerceTools API settings to reflect your own values. The values currently in there are for a test store run by Layer0.

We recommend that you leverage a `.env` file to inject your values to the `middleware.config.js`. Create a `.env` file from the `.env-example` file.

To create a new API Client, log into your CommerceTools instance and go to `Settings > Developer settings > Create new API Client`. Enter a name for the API Client and select the "Mobile & Single-page PWA client" template. Make sure to also check the "View > Stores" option. Sometimes the templates change the auto-checked items, so double check your permissions match that of the current middleware file.

Run the Vue Storefront app with the command:

```bash
yarn run layer0:dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Layer0

You can do a production build of your app and test it locally using:

```bash
layer0 build && layer0 run --production
```

Setting --production runs your app exactly as it will be uploaded to the Layer0 cloud using serverless-offline.

## Deploying to Layer0

Deploying requires an account on Layer0. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Layer0 by running the following in the root folder of your project:

```bash
layer0 deploy
```

Automate deployments using a [Github Action](https://docs.layer0.co/guides/deploying#section_github_actions).

See [deploying](https://docs.layer0.co/guides/deploying) for more information.
