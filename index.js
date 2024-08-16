const express = require("express");
const authorRouter = require("./routes/author.route");
const booksRouter = require("./routes/book.routes");
const roleRouter = require("./routes/role.routes");
const currencyRouter = require("./routes/currency.routes");
const socialMediaRouter = require("./routes/social-media.routes");
const authorContact = require("./routes/author-contact.routes");
const publisherContact = require("./routes/publisher-contact.routes");
const user = require("./routes/user.routes");

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
app.use("/role", roleRouter);
app.use("/currency", currencyRouter);
app.use("/social-media", socialMediaRouter);
app.use("/author-contact", authorContact);
app.use("/publisher-contact", publisherContact);
app.use("/user", user);

// Mulai server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
