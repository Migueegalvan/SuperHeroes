// middleware/errorMiddleware.js
import { validationResult } from 'express-validator';

export function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Convertir los errores a un array de mensajes
    const errorMessages = errors.array().map(error => error.msg);
    // Guardar los mensajes de error en flash
    req.flash('error', errorMessages);
    // Redirigir de vuelta a la página anterior
    return res.redirect('back');
  }
  next();
}
