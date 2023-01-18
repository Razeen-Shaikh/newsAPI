const express = require("express");
const axios = require("axios");
const mem_cache = require("memory-cache");

const router = express.Router();
const base_url = "https://gnews.io/api/v4";
const apiKey = "a9f66e9f8629550d3568fa4d189726f1";

router.get("/:query", async (req, res) => {
  try {
    let key = "news" + req.url;
    let cache = mem_cache.get(key);

    if (cache) {
      res.send(cache);
    } else {
      const news = await axios.get(
        `${base_url}/search?q=${req.params.query}&token=${apiKey}`
      );
      mem_cache.put(key, news.data);
      res.send(news.data);
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
