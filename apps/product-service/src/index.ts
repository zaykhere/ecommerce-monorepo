import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from "./middleware/authMiddleware";
import categoryRouter from "./routes/category.route";
import productRouter from "./routes/product.route";

const app = express();
app.use(cors({
  origin: ["http://localhost:3002", "http://localhost:3003"],
  credentials: true
}));

app.use(express.json());
app.use(clerkMiddleware());

app.get("/health", (req,res) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now()
  })
})

app.get("/test", shouldBeUser, (req,res) => {
  res.json({
    message: `Product service authenticated`,
    userId: req.userId
  })
})

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(err.status || 500).json({message: err.message || "Internal Server Error"})
})

app.listen(8003, () => {
  console.log(`Product service is running...`);
})