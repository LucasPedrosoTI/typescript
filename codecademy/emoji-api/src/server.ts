import express from "express";
import expressionsRouter from "./routes/expressions";
import animalsRouter from "./routes/animals";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/expressions", expressionsRouter);
app.use("/animals", animalsRouter);

app.listen(PORT, () => {
  console.log("Express running on port " + PORT);
});
