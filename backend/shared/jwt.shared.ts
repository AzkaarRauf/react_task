import { TokenData } from '../types/types'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import e from 'express'

const secret = process.env.JWT_SECRET

// Prevent app from starting if JWT_SECRET is not defined
if (!secret) {
    throw new Error('JWT_SECRET is not defined')
}

/**
 * Generate a token that expires in 1 hour
 * @param tokenData Data to be stored in the token
 * @param exp Expiration time
 */
export const generateToken = (tokenData: TokenData, exp: string = '1h') => {
    try {
        const token = jwt.sign(tokenData, secret, { expiresIn: exp })
        return token
    } catch (err) {
        return err as Error
    }
}
