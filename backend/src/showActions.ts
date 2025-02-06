import type { RequestHandler } from "express";
import showRepository from "./showRepository";

// Fonction pour enlever les balises HTML
function removeHtmlTags(str: string): string {
  return str.replace(/<[^>]*>/g, ''); // Remplace les balises HTML par une chaîne vide
}

// Browse pour lire toutes les séries
const browse: RequestHandler = async (req, res, next) => {
  try {
    const shows = await showRepository.readAll();
    
    // Nettoyer les summaries ici avant d'envoyer la réponse
    const cleanedShows = shows.map(show => ({
      id: show.id,
      name: show.name,
      summary: removeHtmlTags(show.summary),
      language: show.language,
      image: show.image || "https://via.placeholder.com/300"
    }));

    res.json(cleanedShows);
  } catch (err) {
    next(err);
  }
};

// Lire une série par ID
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
      // Nettoyer le summary avant de renvoyer la réponse
      show.summary = removeHtmlTags(show.summary);
      res.json(show);
    }
  } catch (err) {
    next(err);
  }
};


export default { browse, read };


