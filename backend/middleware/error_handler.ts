import { NextFunction, Request, Response } from 'express'

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    // Log the error
    console.error(err)

    // Send a response to the client
    res.status(500).send('Internal Server Error')
}

// Handle uncaught exceptions to ensure the server doesn't crash
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
