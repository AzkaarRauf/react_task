import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { pool } from '../configs/db_config'
import User from '../models/user.model'

export default class SqlHandler {
    private pool: Pool
    query: string = ''

    constructor() {
        this.pool = pool
    }

    async getAll(params: any[]) {
        const [data] = await this.pool
            .query<RowDataPacket[]>(this.query, params)
            .catch(err => [err] as Error[])

        return data
    }

    async getOne(params: any[]): Promise<Error | RowDataPacket | null> {
        const [data] = await this.pool
            .query<RowDataPacket[]>(this.query, params)
            .catch(err => [err] as Error[])
        if (data instanceof Error) {
            return data
        }

        return data[0] ?? null
    }

    async exec(params: any[]) {
        const [data] = await this.pool
            .query<ResultSetHeader>(this.query, params)
            .catch(err => [err] as Error[])

        return data
    }
}
