type Show = {
    id: number;
    name: string;
    summary: string;
    language: string;
    image: string;
  };
  
  const ShowCard = ({ show }: { show: Show }) => {
    return (
      <figure className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:border hover:border-gray-300">
        <div className="flex justify-center items-center h-64 bg-gray-200">
        </div>
        <figcaption className="p-4">
          <h2 className="text-xl font-bold mb-2">{show.name}</h2>
          <p className="text-sm text-gray-700">{show.summary}</p>
          <p className="text-sm text-gray-500 mt-2">Langue : {show.language}</p>
        </figcaption>
      </figure>
    );
  };
  
  export default ShowCard;
  