import type { RequestHandler } from "express";
import showRepository from "./showRepository";

// Browse pour lire toutes les séries
const browse: RequestHandler = async (req, res, next) => {
	try {
		const shows = await showRepository.readAll();
		res.json(shows);
	} catch (err) {
		next(err);
	}
};

// 🔹 read pour lire une série avec une id
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


export default { browse, read };
