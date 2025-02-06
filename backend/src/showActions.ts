import type { RequestHandler } from "express";
import showRepository from "./showRepository";

// 🔹 Browse - Lire toutes les séries (READ ALL)
const browse: RequestHandler = async (req, res, next) => {
	try {
		const shows = await showRepository.readAll();
		res.json(shows);
	} catch (err) {
		next(err);
	}
};

// 🔹 Read - Lire une série par ID (READ ONE)
const read: RequestHandler = async (req, res, next) => {
	try {
		const showId = Number.parseInt(req.params.id);

		if (Number.isNaN(showId)) {
			res.status(400).json({ error: "Invalid show ID" });
			return;
		}

		const show = await showRepository.read(showId);
		if (show == null) {
			res.sendStatus(404);
		} else {
			res.json(show);
		}
	} catch (err) {
		next(err);
	}
};

// 🔹 Read Random - Obtenir une série aléatoire
const random: RequestHandler = async (req, res, next) => {
	try {
		const show = await showRepository.random();
		if (show == null) {
			res.sendStatus(404);
		} else {
			res.json(show);
		}
	} catch (err) {
		next(err);
	}
};

// 🔹 Exporter les contrôleurs
export default { browse, read, random };
