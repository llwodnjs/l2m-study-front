const CracoAlias = require("craco-alias");
const CracoScopedCss = require("craco-plugin-scoped-css");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/assets/scss/global.scss";
        `,
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
    {
      plugin: CracoScopedCss,
    },
  ],
};
