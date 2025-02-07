import ShowCard from "../components/ShowCard";

type Show = {
	id: number;
	name: string;
	summary: string;
	language: string;
	image: string;
};

const RandomShow = ({ show, onBack }: { show: Show; onBack: () => void }) => {
	return (
		<div className="flex flex-col items-center">
			<ShowCard show={show} />
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				onClick={onBack}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
			>
				Revenir à la liste des séries
			</button>
		</div>
	);
};

export default RandomShow;
