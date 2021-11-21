module.exports = ({ env }) => ({
  frontendUrl: env("FRONTEND_URL"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f857fd1050ba1bd65b2ac03eed25a1b2"),
    },
  },
});
