module.exports = ({ env }) => ({
  url: env("VAR_HEROKU_URL"),
  frontendUrl: env("FRONTEND_URL"),
});
