import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

// Extraire les variables d'environnement
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Les variables d'environnement de la base de données ne sont pas définies.");
}

// Création d'un pool de connexions
const client = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT), // Assurez-vous que DB_PORT est un nombre
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Exporter le client
export default client;

// Types exportés
import type { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";

// Définir les types pour l'export
type DatabaseClient = Pool;
type Result = ResultSetHeader;
type Rows = RowDataPacket[];

export type { DatabaseClient, Result, Rows };
