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
    if (Object.keys(errors).length > 0) {
        return sendError(res, 422, 'Validation failed', errors)
    }
    if (ValidationRegex.validateEmail(email).failed) {
        errors.email = 'Invalid email'
    }
    if (ValidationRegex.validatePassword(password).failed) {
        errors.password = 'Password must be at least 6 characters long'
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
        return sendError(res, 401, 'Invalid email or password', { email: 'Invalid email or password' })
    }

    // Create token
    const token = generateToken({ email: user.email, id: user.id })
    if (token instanceof Error) {
        return next(token)
    }

    return sendSuccess(res, 'Login successful', { token })
}

export async function register(req: Request<null, null, AuthBody>, res: Response, next: NextFunction) {
    const { email, password } = req.body

    // Validate body
    const errors = {} as Record<string, any>
    if (!email) {
        errors.email = 'Email is required'
    }
    if (!password) {
        errors.password = 'Password is required'
    }
    if (Object.keys(errors).length > 0) {
        return sendError(res, 422, 'Validation failed', errors)
    }
    if (ValidationRegex.validateEmail(email).failed) {
        errors.email = 'Invalid email'
    }
    if (ValidationRegex.validatePassword(password).failed) {
        errors.password = 'Password must be at least 6 characters long'
    }
    if (Object.keys(errors).length > 0) {
        return sendError(res, 422, 'Validation failed', errors)
    }

    // Check if user already exists
    const user = await UserRepo.getByEmail(email)
    if (user instanceof Error) {
        return next(user)
    }

    if (user) {
        return sendError(res, 409, 'User already exists', { email: 'User already exists' })
    }

    // Save user to database
    const result = await UserRepo.add(email, password)
    if (result instanceof Error) {
        return next(result)
    }

    // Check if user was saved
    if (result.affectedRows === 0) {
        return sendError(res, 500, 'Failed to register user. Please try again.', {
            error: 'Something went wrong',
        })
    }

    return sendSuccess(res, 'User registered successfully')
}