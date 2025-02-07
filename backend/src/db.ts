import mysql from "mysql2";
import dotenv from "dotenv";

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Les variables d'environnement de la base de données ne sont pas définies.");
}

// Connexion à MySQL
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),  // Assurez-vous que DB_PORT est un nombre
});

const connectToDatabase = () => {
  return new Promise<void>((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.error("Erreur de connexion à MySQL:", err);
        reject(err);
      } else {
        console.log("Connecté à MySQL");
        resolve();
      }
    });
  });
};

export { connection, connectToDatabase };
