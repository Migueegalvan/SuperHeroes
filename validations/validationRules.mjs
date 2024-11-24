// validations/validationRules.mjs
import { body } from 'express-validator';

// Reglas de validación para agregar un superhéroe
export const agregarSuperheroeValidationRules = [
  body('nombreSuperheroe')
    .notEmpty()
    .withMessage('El nombre del superhéroe es obligatorio')
    .isLength({ min: 3 })
    .withMessage('El nombre del superhéroe debe tener al menos 3 caracteres')
    .trim()
    .escape(),
  body('nombreReal')
    .notEmpty()
    .withMessage('El nombre real es obligatorio')
    .trim()
    .escape(),
  body('edad')
    .notEmpty()
    .withMessage('La edad es obligatoria')
    .isInt({ min: 0 })
    .withMessage('La edad debe ser un número entero positivo'),
  body('planetaOrigen')
    .notEmpty()
    .withMessage('El planeta de origen es obligatorio')
    .trim()
    .escape(),
  body('debilidad')
    .notEmpty()
    .withMessage('La debilidad es obligatoria')
    .trim()
    .escape()
];

// Reglas de validación para editar un superhéroe
export const editarSuperheroeValidationRules = [
  body('nombreSuperheroe')
    .optional()
    .isLength({ min: 3 })
    .withMessage('El nombre del superhéroe debe tener al menos 3 caracteres')
    .trim()
    .escape(),
  body('nombreReal')
    .optional()
    .trim()
    .escape(),
  body('edad')
    .optional()
    .isInt({ min: 0 })
    .withMessage('La edad debe ser un número entero positivo'),
  body('planetaOrigen')
    .optional()
    .trim()
    .escape(),
  body('debilidad')
    .optional()
    .trim()
    .escape()
];

// Reglas de validación para registrar usuarios
export const registerValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Por favor ingresa un correo válido')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
    .trim()
    .escape(),
  body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio')
    .isAlphanumeric()
    .withMessage('El nombre de usuario debe ser alfanumérico')
    .trim()
    .escape()
];
