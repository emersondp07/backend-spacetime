import "dotenv/config";

import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import { authRoutes } from "./routes/auth";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: String(process.env.SECRET_SIGN_JWT),
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3334,
  })
  .then(() => {
    console.log("🚀 HTTP server running!");
  });
