module.exports = {
  host: "ec2-44-199-86-61.compute-1.amazonaws.com",
  username: "pylpgeyhefgqzo",
  password: "9bf38774a268aecbaef1ede07350287a54a1b972eaf7ff0f87a96121f0683fb2",
  database: "d12pdetqtp5p3c",
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
  },
  dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
};