import ShowList from "./ShowList";

export default function ShowsPage() {
	return (
		<main>
			<h1 className="text-2xl font-bold text-center my-6">Toutes les Séries</h1>
			<ShowList shows={[]} />
		</main>
	);
}
