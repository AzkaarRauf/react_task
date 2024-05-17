import { NextFunction, Request, Response } from 'express'
import { sendError } from '../shared/std_response.shared'

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    // Log the error
    console.error(err)

    // Send a response to the client
    return sendError(res, 500, 'Internal server error', err)
}

// Handle uncaught exceptions to ensure the server doesn't crash
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
