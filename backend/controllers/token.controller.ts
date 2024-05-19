import { NextFunction, Request, Response } from 'express'
import { sendSuccess } from '../shared/std_response.shared'

export async function getTopTokens(req: Request, res: Response, next: NextFunction) {
    return sendSuccess(res, 'Successfully fetched top tokens', [
        {
            name: 'Ripple',
            symbol: 'XRP',
            price: '233',
            logo: 'https://www.svgrepo.com/download/428643/ripple-xrp-crypto.svg',
            data: [
                { amt: 312 },
                { amt: 487 },
                { amt: 159 },
                { amt: 401 },
                { amt: 264 },
                { amt: 498 },
                { amt: 233 },
            ],
            isProfit: false,
            percentDiff: ((parseFloat('233') - 312) / 233) * 100,
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            price: '172',
            logo: 'https://www.svgrepo.com/download/428624/ethereum-crypto-cryptocurrency-2.svg',
            data: [
                { amt: 312 },
                { amt: 493 },
                { amt: 428 },
                { amt: 401 },
                { amt: 264 },
                { amt: 498 },
                { amt: 172 },
            ],
            isProfit: false,
            percentDiff: ((parseFloat('172') - 312) / 172) * 100,
        },
        {
            name: 'Solana',
            symbol: 'SOL',
            logo: 'https://www.svgrepo.com/download/470684/solana.svg',
            price: '496',
            data: [
                { amt: 322 },
                { amt: 211 },
                { amt: 392 },
                { amt: 167 },
                { amt: 489 },
                { amt: 305 },
                { amt: 496 },
            ],
            isProfit: true,
            percentDiff: ((496 - 322) / 496) * 100,
        },
    ])
}

export async function getGreedIndex(req: Request, res: Response, next: NextFunction) {
    return sendSuccess(res, 'Successfully fetched greed index', { value: 63 })
}
