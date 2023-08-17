import express from "express";
import { connectToDatabase } from "./services/database.service";
import { hlTestsRouter } from "./routes/hl-tests";

const app = express();
const port = 3000; // default port to listen

// ** TODO ** Replace this code with a call to your games router class to handle all calls to /games endpointy

connectToDatabase()
  .then(() => {
    app.use("/", hlTestsRouter);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("Hello world!");
});
