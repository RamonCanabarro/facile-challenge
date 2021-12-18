module.exports = {
  host: "",
  username: "",
  password: "",
  database: "",
  dialect: "",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscore: true
  },
  dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
};