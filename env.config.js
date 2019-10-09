// define environments
const environments = {
  development: {
    PUBLIC_URL: "http://localhost:3333"
  },
  staging: {
    PUBLIC_URL: "http://staging.example.com"
  },
  production: {
    PUBLIC_URL: "http://example.com"
  }
};

const env =
  (typeof window !== "undefined" ? window.ENV : process.env.AC_ENV) ||
  "development";
module.exports = environments[env.toLowerCase()];
