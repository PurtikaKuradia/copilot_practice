import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
export class DBUtil {
    static async getConnection() {
        return await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
    }
    static async executeQuery(query) {
        let connection;
        try {
            connection = await DBUtil.getConnection();
            const [rows] = await connection.execute(query);
            return rows;
        } catch (error) {
            console.error("DB Error:", error);
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}