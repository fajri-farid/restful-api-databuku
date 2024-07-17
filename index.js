const express = require("express");
const authorRouter = require("./routes/author.route");
const booksRouter = require("./routes/book.routes");

const app = express();
const PORT = 8000;

// Middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route utama (/)
app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/authors", authorRouter);
app.use("/books", booksRouter);

// Mulai server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
