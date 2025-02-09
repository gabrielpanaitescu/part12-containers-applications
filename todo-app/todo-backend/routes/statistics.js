const express = require("express");
const { getAsync } = require("../redis");
const router = express.Router();

router.get("/", async (req, res) => {
  const addedTodos = await getAsync("addedTodos");

  res.send({
    addedTodos: addedTodos ? addedTodos : "no todos added",
  });
});

module.exports = router;
