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
export const generateToken = (tokenData: TokenData, exp: string = '1d') => {
    try {
        const token = jwt.sign(tokenData, secret, { expiresIn: exp })
        return token
    } catch (err) {
        return err as Error
    }
}

/**
 * Verify a token
 * @param token Token to be verified
 */
export const verifyToken = (token: string) => {
    try {
        const result = jwt.verify(token, secret) as any
        const tokenData: TokenData = {
            id: result.id,
            email: result.email
        }

        
        return tokenData
    } catch (err) {
        return err as Error
    }
}