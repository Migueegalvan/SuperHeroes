// middleware/loggerMiddleware.js
export default function loggerMiddleware(req, res, next) {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  }
  