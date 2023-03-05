"use strict";

// This file was automatically added by edgio deploy.
// You should commit this file to source control.

module.exports = {
  connector: "@edgio/nuxt",
  backends: {
    api: {
      domainOrIp: "api.commercetools.com",
      hostHeader: "api.commercetools.com"
    }
  },
  includeNodeModules: true,
  includeFiles: {
    middleware: true,
    "middleware.config.js": true,
    "themeConfig.js": true
  }
};
