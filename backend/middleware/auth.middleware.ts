import { NextFunction, Request, Response } from 'express'
import { sendError } from '../shared/std_response.shared'
import { TokenData } from '../types/types'
import { verifyToken } from '../shared/jwt.shared'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // get token from header
    const token = req.header('Authorization')?.split(' ')[1]

    // if token is not found
    if (!token) {
        return sendError(res, 401, 'Unauthorized', { token: 'Token is required' })
    }

    // verify token
    const tokenData = verifyToken(token)
    if (tokenData instanceof Error) {
        return sendError(res, 401, 'Unauthorized', { token: 'Invalid token' })
    }

    // set token data in request
    res.locals.user = tokenData as TokenData
    next()
}
