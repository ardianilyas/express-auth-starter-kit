import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth";
import { errorHandler } from "./middlewares/error-handler";
import { env } from "./config/env";
import z from "zod";
import { validate } from "./shared/utils/validate";

const app = express();
const PORT = env.PORT;

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

app.post("/api/users", async (req, res, next) => {
  try {
    const data = validate(userSchema, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
