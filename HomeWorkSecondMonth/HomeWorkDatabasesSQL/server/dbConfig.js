const dbConfig = {
    host: "localhost",
    user: "root",
    port: 3306,
    password: "password",
    database: "skripnik_schema",
    insecureAuth: true,
    options: { trustedConnection: true }
  }

module.exports = dbConfig