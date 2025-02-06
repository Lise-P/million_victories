import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/router"; // Import des routes

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Utilisation des routes définies
app.use(route);

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
