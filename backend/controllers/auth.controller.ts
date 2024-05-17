import { NextFunction, Request, Response } from 'express'

type AuthBody = {
    string: string
    password: string
}
export async function login(req: Request<null, null, AuthBody>, res: Response, next: NextFunction) {}
