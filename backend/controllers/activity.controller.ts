import { NextFunction, Request, Response } from 'express'
import { sendSuccess } from '../shared/std_response.shared'

const data = [
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Completed',
        valueCrypto: 3.22874598274598,
        valueUSD: 192487,
        logo: 'https://utfs.io/f/d56f9560-4f1b-487e-a247-a025bf29b50f-lqugd8.svg',
        symbol: 'ETH',
    },
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Pending',
        valueCrypto: 3.22874598274598,
        valueUSD: 192487,
        logo: 'https://utfs.io/f/ecc76c52-47b8-43cf-806e-510bb56b2ac1-au6xlj.svg',
        symbol: 'ETH',
    },
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Pending',
        valueCrypto: 3.22874598274598,
        valueUSD: 192487,
        logo: 'https://utfs.io/f/ecc76c52-47b8-43cf-806e-510bb56b2ac1-au6xlj.svg',
        symbol: 'ETH',
    },
    {
        isProfit: false,
        id: 'Ox0328ahofsu890woi4rj',
        status: 'Completed',
        valueCrypto: -3.22874598274598,
        valueUSD: 192487,
        logo: 'https://utfs.io/f/d56f9560-4f1b-487e-a247-a025bf29b50f-lqugd8.svg',
        symbol: 'ETH',
    },
]

export async function getRecent(req: Request, res: Response, next: NextFunction) {
    return sendSuccess(res, 'Recent activities fetched successfully', data)
}
