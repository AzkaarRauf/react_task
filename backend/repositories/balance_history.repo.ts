import BalanceHistory from '../models/balance_history.model'
import SqlHandler from '../shared/sql_handler.shared'

export default class BalanceHistoryRepo {
    static async getAllByUserId(userId: number) {
        const sql = new SqlHandler()

        sql.query = 'SELECT * FROM balance_history WHERE user_id = ? ORDER BY date'

        const data = await sql.getAll([userId])
        if (data instanceof Error) {
            return data
        }

        const balanceHistory = data.map(row => {
            return new BalanceHistory(row.id, row.userId, row.balance, row.date)
        })

        return balanceHistory
    }

    static async addBalanceHistory(userId: number, balance: number, date: Date) {
        const sql = new SqlHandler()

        sql.query = 'INSERT INTO balance_history (user_id, balance, date) VALUES (?, ?, ?)'

        const data = await sql.exec([userId, balance, date])

        return data
    }
}
