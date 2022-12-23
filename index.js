const express = require(`express`);
const app = express();
require(`dotenv`).config();

const url = process.env.MONGODB_URL;

function main() {
  console.log(url);

  const users = [`adam`, `filip`, `gunnart`];

  app.get(`/users/:name`, function (req, res) {
    try {
      const users = users.find((name) => name === req.params.name);
      if (!users) {
        throw new error({ message: `hittar inte användare` });
      }

      res.send(users);
    } catch (error) {
      console.log(`oj det gick inte bra`);
      res.send(`ojoj det gick inte`);
    }
  });

  app.listen(3000);
}

main();
