import { body } from "express-validator";

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 6}),
    body('fullname').isLength({min: 4}),
    body('avatarUrl').optional().isURL(),
]

