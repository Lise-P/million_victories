const API_URL =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/shows";

export async function getShows() {
	const res = await fetch(`${API_URL}`);
	if (!res.ok) throw new Error("Failed to fetch shows");
	return res.json();
}

export async function getShowById(id: number) {
	const res = await fetch(`${API_URL}/${id}`);
	if (!res.ok) throw new Error(`Failed to fetch show with id ${id}`);
	return res.json();
}

export async function getRandomShow() {
	const res = await fetch(`${API_URL}/random`);
	if (!res.ok) throw new Error("Failed to fetch a random show");
	return res.json();
}
