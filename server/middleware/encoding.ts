import { Request, Response, NextFunction } from "express";

export function forceUtf8Middleware(req: Request, res: Response, next: NextFunction) {
  // Форсируем UTF-8 для всех ответов
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Устанавливаем кодировку для входящих данных
  if (req.headers['content-type'] && !req.headers['content-type'].includes('charset')) {
    req.headers['content-type'] += '; charset=utf-8';
  }

  next();
}
