import { NextFunction, Request, Response } from 'express'
import { sendSuccess } from '../shared/std_response.shared'
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
