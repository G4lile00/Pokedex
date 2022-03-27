const express = require("express");
const router = express.Router();
const app = express();

const Images = require("../Controlers/Images").default;
for (let i = 0; i <= 493; i++) {
  router.get(`/${i}`, (req, res) => {
    res.send(
      `<image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${i}.png' /><br>`,
    );
  });
}

module.exports = router;
