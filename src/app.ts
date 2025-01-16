import express, { Application } from "express";
import bodyParser from "body-parser";
import userRoute from "@modules/user/userRoute";

const app: Application = express();

app.use(bodyParser.json());

//routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("welcome to project");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export default app;
