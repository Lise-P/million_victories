"use client"; // Obligatoire pour useState et useEffect

import { useState, useEffect } from "react";
import ShowList from "./shows/ShowList";
// type de SHow
type Show = {
	id: number;
	name: string;
	summary: string;
	language: string;
	image: string;
};

export default function Home() {
	const [shows, setShows] = useState<Show[]>([]);

	useEffect(() => {
		fetch("http://localhost:5000/api/shows")
			.then((res) => res.json())
			.then((data) => setShows(data))
			.catch((error) =>
				console.error("Erreur lors de la récupération des séries", error),
			);
	}, []);

	return (
		<main>
			<h1 className="text-2xl font-bold text-center my-6">Liste des séries</h1>
			<ShowList shows={shows} />
		</main>
	);
}
