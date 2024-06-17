const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

app.use(express.json());

const articlesInfo = {
  "Learn-React": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
