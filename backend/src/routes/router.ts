import express from "express";
import showActions from "../showActions";

const router = express.Router();

/* ************************************************************************* */
// routes liées aux séries
/* ************************************************************************* */

router.get("/api/shows", showActions.browse);

router.get("/api/shows/:id", showActions.read);

export default router;
