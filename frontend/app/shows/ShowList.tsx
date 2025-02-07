"use client";

import { useState } from "react";

type Show = {
	id: number;
	name: string;
	summary: string;
	language: string;
};

type ShowListProps = {
	shows: Show[];
};

const ShowList = ({ shows }: ShowListProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [randomShow, setRandomShow] = useState<Show | null>(null);

	// 🔍 Filtrer les séries selon la recherche
	const filteredShows = shows.filter((show) =>
		show.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	// 🎲 Sélectionner une série au hasard
	const getRandomShow = () => {
		if (shows.length > 0) {
			const randomIndex = Math.floor(Math.random() * shows.length);
			setRandomShow(shows[randomIndex]);
		}
	};

	// 🔄 Réinitialiser la liste des séries
	const resetShowList = () => {
		setRandomShow(null);
	};

	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
			<div className="w-full sm:w-2/3 flex items-center justify-between gap-4 mb-6">
				<input
					type="text"
					placeholder="Rechercher une série..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={getRandomShow}
					className="p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
				>
					🎲 Aléatoire
				</button>
				{randomShow && (
					// biome-ignore lint/a11y/useButtonType: <explanation>
					<button
						onClick={resetShowList}
						className="p-3 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition"
					>
						🔄 Revenir
					</button>
				)}
			</div>

			<section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
				{randomShow ? (
					<figure className="bg-white rounded-xl shadow-md p-6 transform transition hover:scale-105 hover:shadow-blue-500/50">
						<figcaption>
							<h2 className="text-xl font-bold mb-2">{randomShow.name}</h2>
							<p className="text-sm text-gray-700">{randomShow.summary}</p>
							<p className="text-sm text-gray-500 mt-2">
								Langue : {randomShow.language}
							</p>
						</figcaption>
					</figure>
				) : filteredShows.length > 0 ? (
					filteredShows.map((show: Show) => (
						<figure
							key={show.id}
							className="bg-white rounded-xl shadow-md p-6 transform transition hover:scale-105 hover:shadow-blue-500/50"
						>
							<figcaption>
								<h2 className="text-xl font-bold mb-2">{show.name}</h2>
								<p className="text-sm text-gray-700">{show.summary}</p>
								<p className="text-sm text-gray-500 mt-2">
									Langue : {show.language}
								</p>
							</figcaption>
						</figure>
					))
				) : (
					<p>Aucune série trouvée</p>
				)}
			</section>
		</main>
	);
};

export default ShowList;
