import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const corsOptions = {
  origin: ["*"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Welcome",
  });
});

app.listen(port, () => {
  console.log("Server is Running PORT: "+ port);
});
