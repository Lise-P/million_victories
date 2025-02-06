import { connection } from "./db";
import type { RowDataPacket } from "mysql2";

// à mettre dans fichier à part pour une v2
type Show = {
	id: number;
	name: string;
	summary: string;
	language: string;
};

class ShowRepository {
	async readAll(): Promise<Show[]> {
		const [results] = await connection
			.promise()
			.query<RowDataPacket[]>("SELECT * FROM shows LIMIT 10");
		return results as Show[];
	}

	async read(id: number): Promise<Show | null> {
		const [results] = await connection
			.promise()
			.query<RowDataPacket[]>("SELECT * FROM shows WHERE id = ?", [id]);
		return results.length > 0 ? (results[0] as Show) : null;
	}

	async fetchAndStoreShows(): Promise<void> {
		try {
			const response = await fetch("https://api.tvmaze.com/shows");
			const shows = await response.json();

			for (const show of shows) {
				const { id, name, summary, language } = show;

				const [existing] = await connection
					.promise()
					.query<RowDataPacket[]>("SELECT * FROM shows WHERE id = ?", [id]);

				if (existing.length === 0) {
					await connection
						.promise()
						.query(
							"INSERT INTO shows (id, name, summary, language) VALUES (?, ?, ?, ?)",
							[id, name, summary, language],
						);
				}
			}

			console.log("Données TV Maze récupérées et stockées !");
		} catch (error) {
			console.error(
				"Erreur lors de la récupération des données TV Maze :",
				error,
			);
		}
	}
}

export default new ShowRepository();
