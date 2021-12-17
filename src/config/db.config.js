module.exports = {
  host: "",
  username: "",
  password: "",
  db: "",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscore: true
  }
};