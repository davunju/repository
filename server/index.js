const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes for news

//Create news
app.post("/stories", async (req, res) => {
  try {
    const { fullname, heading, story, date } = req.body;
    const newStory = await pool.query(
      "INSERT INTO news (full_name, heading, story, date) VALUES($1, $2, $3, $4) RETURNING *",
      [fullname, heading, story, date]
    );
    res.json(newStory.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Retrieve news
app.get("/stories", async (req, res) => {
  try {
    const allNews = await pool.query("SELECT * FROM news");
    res.json(allNews.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Update news
app.put("/stories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, heading, story, date } = req.body;
    const newsToUpdate = await pool.query(
      "UPDATE news SET full_name = $1, heading = $2, story = $3, date = $4 WHERE id = $5",
      [fullname, heading, story, date, id]
    );
    res.json("news updated");
  } catch (err) {
    console.error(err.message);
  }
});

//Delete news
app.delete("/stories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNews = await pool.query("DELETE FROM news WHERE id = $1", [id]);
    res.json("news was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
