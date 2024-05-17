import SqlHandler from '../shared/sql_handler.shared'
import User from '../models/user.model'

export default class UserRepo {
    static async getById(id: number) {
        const sql = new SqlHandler()

        sql.query = 'SELECT * FROM users WHERE id = ?'

        const data = await sql.getOne([id])
        if (data instanceof Error) {
            return data
        }

        if (!data) {
            return null
        }

        const user = new User(data.id, data.email, data.password)

        return user
    }

    static async getByEmail(email: string) {
        const sql = new SqlHandler()

        sql.query = 'SELECT * FROM users WHERE email = ?'

        const data = await sql.getOne([email])
        if (data instanceof Error) {
            return data
        }

        if (!data) {
            return null
        }

        const user = new User(data.id, data.email, data.password)

        return user
    }

    static async add(email: string, password: string) {
        const sql = new SqlHandler()

        sql.query = 'INSERT INTO users (email, password) VALUES (?, ?)'

        const result = await sql.exec([email, password])
        if (result instanceof Error) {
            return result
        }

        return result
    }

    static async validate(email: string, password: string) {
        const sql = new SqlHandler()

        sql.query = 'SELECT * FROM users WHERE email = ? AND password = ?'

        const data = await sql.getOne([email, password])
        if (data instanceof Error) {
            return data
        }

        return Boolean(data)
    }
}
