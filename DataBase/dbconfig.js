const config = {
  user: "Asesja_SQLLogin_1",
  password: "pq9d9gkdf5",
  database: "ProductsBD",
  server: "ProductsBD.mssql.somee.com",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

module.exports = config;