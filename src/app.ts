import express, { Application } from "express";
import bodyParser from "body-parser";
import userRoute from "@modules/user/userRoute";
import { GlobalExceptionHandling } from "middleware/GlobalExceptionHandler";

const app: Application = express();

app.use(bodyParser.json());

//routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
   res.send("welcome to project");
});

app.use(GlobalExceptionHandling);

app.listen(3000, () => {
   console.log("Server running on http://localhost:3000");
});

export default app;
