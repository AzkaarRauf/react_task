import { NextFunction, Request, Response } from 'express'
import { sendError, sendSuccess } from '../shared/std_response.shared'
import ValidationRegex from '../shared/validation_regex.shared'
import { generateToken } from '../shared/jwt.shared'
import UserRepo from '../repositories/user.repo'

type AuthBody = {
    email: string
    password: string
}

export async function login(req: Request<null, null, AuthBody>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    // validate body
    const errors = {} as Record<string, any>
    if (!email) {
        errors.email = 'Email is required'
    }
    if (!password) {
        errors.password = 'Password is required'
    }
    if (ValidationRegex.validateEmail(email).failed) {
        errors.email = 'Invalid email'
    }
    if (Object.keys(errors).length > 0) {
        return sendError(res, 422, 'Validation failed', errors)
    }

    // Validate email and password from database
    const user = await UserRepo.getByEmail(email)
    if (user instanceof Error) {
        return next(user)
    }
    if (!user || user.password !== password) {
        return sendError(res, 401, 'Invalid email or password', new Error('Invalid email or password'))
    }

    // Create token
    const token = generateToken({ email: user.email, id: user.id })
    if (token instanceof Error) {
        return next(token)
    }

    return sendSuccess(res, 'Login successful', { token })
}
