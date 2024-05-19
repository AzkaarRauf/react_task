import { NextFunction, Request, Response } from 'express'
import { sendError, sendSuccess } from '../shared/std_response.shared'
import BalanceHistory from '../models/balance_history.model'
import BalanceHistoryRepo from '../repositories/balance_history.repo'

export async function getBalanceHistory(req: Request<null, null, {}>, res: Response, next: NextFunction) {
    // Get balance history
    const balanceHistory = await BalanceHistoryRepo.getAllByUserId(res.locals.user.id).catch(
        err => err as Error
    )
    if (balanceHistory instanceof Error) {
        return next(balanceHistory)
    }

    return sendSuccess(res, 'Successfully fetched balance history', balanceHistory)
}

export async function addBalanceHistory(
    req: Request<null, null, { balance: number; date: string }>,
    res: Response,
    next: NextFunction
) {
    const { balance, date: dateString } = req.body

    // Validate request body
    if (!req.body.balance || !req.body.date) {
        return sendError(res, 400, 'Balance and date are required', {
            error: 'Balance and date are required',
        })
    }
    if (typeof balance !== 'number') {
        return sendError(res, 400, 'Balance must be a number', {
            error: 'Balance must be a number',
        })
    }

    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
        return sendError(res, 400, 'Invalid date', {
            error: 'Invalid date',
        })
    }

    // Add balance history
    const balanceHistory = await BalanceHistoryRepo.addBalanceHistory(
        res.locals.user.id,
        req.body.balance,
        date
    ).catch(err => err as Error)

    if (balanceHistory instanceof Error) {
        return next(balanceHistory)
    }
    if (balanceHistory.affectedRows === 0) {
        return sendError(res, 500, 'Failed to add balance history', { error: 'Something went wrong' })
    }

    return sendSuccess(res, 'Successfully added balance history', balanceHistory)
}