import { Response } from 'express'

type StdResponse = {
    success: boolean
    message: string
    data: object | object[]
    error: object | null
}

export function sendSuccess(res: Response, message: string, data: object | object[] = {}) {
    const response: StdResponse = {
        success: true,
        message,
        data,
        error: null,
    }

    return res.status(200).json(response)
}

export function sendError(res: Response, status: number, message: string, error: object) {
    const response: StdResponse = {
        success: false,
        message,
        data: {},
        error,
    }

    return res.status(status).json(response)
}
