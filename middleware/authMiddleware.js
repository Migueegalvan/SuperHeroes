// middleware/authMiddleware.js
export default function authMiddleware(req, res, next) {
    console.log('Middleware de Autenticación de Usuario');
    if (!req.headers.authorization) {
      return res.status(401).send('No autorizado');
    }
    next();
  }
  