import { NextFunction, Request, Response } from 'express'
import { sendSuccess } from '../shared/std_response.shared'

const data = [
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Completed',
        valueCrypto: 3.22874598274598,
        valueUSD: 192487,
        logo: 'http://localhost:5173/src/assets/top-right.svg',
        symbol: 'ETH',
    },
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Pending',
        valueCrypto: 3.22874598274598,
        valueUSD: 192487,
        logo: 'http://localhost:5173/src/assets/bottom-left.svg',
        symbol: 'ETH',
    },
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Pending',
        valueCrypto: 3.22874598274598,
        valueUSD: 192487,
        logo: 'http://localhost:5173/src/assets/bottom-left.svg',
        symbol: 'ETH',
    },
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Completed',
        valueCrypto: -3.22874598274598,
        valueUSD: 192487,
        logo: 'http://localhost:5173/src/assets/top-right.svg',
        symbol: 'ETH',
    },
]

export async function getRecent(req: Request, res: Response, next: NextFunction) {
    return sendSuccess(res, 'Recent activities fetched successfully', data)
}
