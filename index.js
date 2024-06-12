const express = require("express");
const app = express();
const authorRoutes = require("./routes/author.route");

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use("/authors", authorRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
