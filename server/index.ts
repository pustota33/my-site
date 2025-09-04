import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { forceUtf8Middleware } from "./middleware/encoding";

export function createServer() {
  const app = express();

  // Принудительно устанавливаем UTF-8 для всех запросов и ответов
  app.use(forceUtf8Middleware);

  // Set charset for all responses
  app.use((req, res, next) => {
    res.charset = 'utf-8';
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
  });

  // Middleware
  app.use(cors({
    credentials: true,
    origin: true
  }));
  app.use(express.json({
    type: ['application/json', 'text/plain']
  }));
  app.use(express.urlencoded({
    extended: true
  }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
