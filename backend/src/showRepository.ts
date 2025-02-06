import { connection } from "./db";
import type { RowDataPacket } from "mysql2";

// Type Show
type Show = {
	id: number;
	name: string;
	summary: string;
	language: string;
};

class ShowRepository {
	async readAll(): Promise<Show[]> {
		const [results] = await connection.promise().query<RowDataPacket[]>(
			"SELECT * FROM shows"
		);
		return results as Show[];
	}

	async read(id: number): Promise<Show | null> {
		const [results] = await connection.promise().query<RowDataPacket[]>(
			"SELECT * FROM shows WHERE id = ?",
			[id]
		);
		return results.length > 0 ? (results[0] as Show) : null;
	}

	async random(): Promise<Show | null> {
		const [results] = await connection.promise().query<RowDataPacket[]>(
			"SELECT * FROM shows ORDER BY RAND() LIMIT 1"
		);
		return results.length > 0 ? (results[0] as Show) : null;
	}
}

export default new ShowRepository();
