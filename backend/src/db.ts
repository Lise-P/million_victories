import mysql from "mysql2";

const connection = mysql.createConnection({
	host: "localhost",
	user: "lise",
	password: "cerise",
	database: "movies_db",
	port: 3306,
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
