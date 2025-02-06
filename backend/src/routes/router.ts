import express from "express";
import showActions from "../showActions";

const router = express.Router();

/* ************************************************************************* */
// Routes liées aux séries
/* ************************************************************************* */

// 🔹 Récupérer toutes les séries
router.get("/api/shows", showActions.browse);

// 🔹 Récupérer une série par ID
router.get("/api/shows/:id", showActions.read);

// 🔹 Récupérer une série aléatoire
router.get("/api/shows/random", showActions.random);

export default router;
