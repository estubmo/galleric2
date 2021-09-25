const parse = require("pg-connection-string").parse;
const config = process.env.DATABASE_URL ? parse(process.env.DATABASE_URL) : {};

//CI test
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config?.host,
        port: config?.port,
        database: config?.database,
        username: config?.user,
        password: config?.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: env("DATABASE_SSL", false),
      },
    },
  },
});
