import { NextFunction, Request, Response } from 'express'
import { sendSuccess } from '../shared/std_response.shared'
import BalanceHistory from '../models/balance_history.model'

export async function getBalanceHistory(req: Request<null, null, {}>, res: Response, next: NextFunction) {
    // Get balance history
    // Return balance history
    return sendSuccess(res, 'Successfully fetched balance history', [
        new BalanceHistory(1, 1, 1000, new Date(2023, 8, 1)),
        new BalanceHistory(2, 1, 2000, new Date(2023, 9, 1)),
        new BalanceHistory(3, 1, 3000, new Date(2023, 10, 1)),
        new BalanceHistory(4, 1, 4000, new Date(2023, 11, 1)),
        new BalanceHistory(5, 1, 5000, new Date(2024, 0, 1)),
        new BalanceHistory(6, 1, 4300, new Date(2024, 1, 1)),
        new BalanceHistory(7, 1, 4700, new Date(2024, 2, 1)),
        new BalanceHistory(8, 1, 4200, new Date(2024, 3, 1)),
        new BalanceHistory(9, 1, 3800, new Date(2024, 4, 1)),
    ])
}
