import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

async function initDatabase() {
	const connection = await mysql.createConnection({
		host: DB_HOST,
		port: Number(DB_PORT),
		user: DB_USER,
		password: DB_PASSWORD,
	});

	console.log("Connexion à MySQL réussie.");

	await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
	console.log(`Base de données "${DB_NAME}" vérifiée.`);

	await connection.changeUser({ database: DB_NAME });

	await connection.query(`
        CREATE TABLE IF NOT EXISTS shows (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            summary TEXT,
            language VARCHAR(50),
            image VARCHAR(255)
        )
    `);
	console.log(`Table "shows" vérifiée.`);

	await connection.end();
	console.log("Initialisation terminée.");
}

// Exécution du script
initDatabase().catch(console.error);
