const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const BlogRouter = require("./routes/blogRoute");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api", (req, res) => {
  res.send("hello");
});
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/blogs", BlogRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("server is running");
});
