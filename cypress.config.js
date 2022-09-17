const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:10000,
    viewportWidth:1920,
    viewportHeight: 1080
   },
});
