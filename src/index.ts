import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req: Request, res: Response) => {
  return res.json({ messgae: "Hello from the backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
