require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || undefined;
console.log(MONGO_URL);
const REDIS_URL = process.env.REDIS_URL || undefined;
console.log(REDIS_URL);

module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL, //: 'redis://localhost:6378'
};
