const express = require("express");
const authorRouter = require("./routes/author.route");
const booksRouter = require("./routes/book.routes");
const roleRouter = require("./routes/role.routes");
const currencyRouter = require("./routes/currency.routes");
const socialMediaRouter = require("./routes/social-media.routes");
const authorContactRouter = require("./routes/author-contact.routes");
const publisherContactRouter = require("./routes/publisher-contact.routes");
const userRouter = require("./routes/user.routes");
const publisherRouter = require("./routes/publisher.routes");
const priceRouter = require("./routes/price.routes");
const languageRouter = require("./routes/language.routes");
const tagsRouter = require("./routes/tags.routes");
const storeRouter = require("./routes/store.routes");
const bookLanguageRouter = require("./routes/book-language.routes");

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
app.use("/author-contact", authorContactRouter);
app.use("/publisher-contact", publisherContactRouter);
app.use("/user", userRouter);
app.use("/publisher", publisherRouter);
app.use("/price", priceRouter);
app.use("/language", languageRouter);
app.use("/tags", tagsRouter);
app.use("/store", storeRouter);
app.use("/book-language", bookLanguageRouter);

// Mulai server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
