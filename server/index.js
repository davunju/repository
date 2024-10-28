const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const pool = require("./db");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 4 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const isValidType = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (isValidType) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg, .jpg, or .png images are allowed!"));
    }
  },
});

//Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

//Routes for news

//Create news
app.post("/stories", upload.single("image"), async (req, res) => {
  try {
    const { fullname, title, subtitle, content, date } = req.body;
    const imagePath = req.file ? req.file.path : null;
    const slug = generateSlug(title);
    const newStory = await pool.query(
      "INSERT INTO news (fullname, title, subtitle, content, slug, date, image_path) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [fullname, title, subtitle, content, slug, date, imagePath]
    );
    res.json(newStory.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Retrieve news
app.get("/stories", async (req, res) => {
  try {
    const allNews = await pool.query("SELECT * FROM news ORDER BY date DESC");
    res.json(allNews.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Retrieve a single news article by slug
app.get("/stories/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const singleArticle = await pool.query(
      "SELECT * FROM news WHERE slug = $1",
      [slug]
    );
    if (singleArticle.rows.length > 0) {
      res.json(singleArticle.rows[0]);
    } else {
      res.status(404).json({ error: "News article not found" });
    }
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

//Function to generate slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with a dash
    .replace(/(^-|-$)/g, "") // Remove leading or trailing dashes
    .trim();
};

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
