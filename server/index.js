import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/movies.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";

//app.use(express.json()); (cause PayloadTooLargeError: request entity too large, so edit wasnt functioning) fixed!
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Test");
});
app.use("/movies", postRoutes);
app.use("/auth", authRoute);
app.use("/users", userRoute);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
  })
  .catch((error) => {
    console.error(error.message);
  });

mongoose.set("useFindAndModify", false);
