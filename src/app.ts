import express, { Application } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import userRoute from "@modules/user/userRoute";
import { GlobalExceptionHandling } from "middleware/GlobalExceptionHandler";
import dotenv from "dotenv";
import authRouter from "@modules/auth/authRoute";
import { AuthMiddleware } from "middleware/AuthMiddleware";

// Load environment variables from .env file
dotenv.config();

const app: Application = express();

app.use(bodyParser.json());

//routes
app.use("/api/auth", authRouter);

app.use(AuthMiddleware);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
   res.send("welcome to project");
});

app.use(GlobalExceptionHandling);

app.listen(process.env.PORT, () => {
   console.log(`Server running on http://localhost:${process.env.PORT}`);
});

export default app;
