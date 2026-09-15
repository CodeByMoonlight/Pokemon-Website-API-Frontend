import {
  typeText,
  cardTypeColors,
  cardTypeIcons,
  generationMap,
  getPrimaryType,
} from "../utils/pokemonTypes";

export default function MemoryCard({ pokemon }) {
  const primaryType = getPrimaryType(pokemon.types);

  return (
    <div
      className="text-text-primary flex aspect-auto w-full min-w-0 flex-col gap-2 rounded-lg border-2 border-gray-200 bg-white p-2 shadow-lg"
      style={{ aspectRatio: "272 / 330" }}
    >
      <div
        className={`${cardTypeColors[primaryType] || "bg-gray-300"} flex min-h-0 flex-1 flex-col justify-between rounded-lg p-2 sm:p-3`}
      >
        <div className="flex justify-between gap-1 text-[0.6rem] font-semibold sm:text-sm">
          <p className="truncate uppercase">
            {generationMap[
              pokemon.generation.replace("generation-", "").toUpperCase()
            ] || pokemon.generation}
          </p>
          <p>{pokemon.id.toString().padStart(5, "0")}</p>
        </div>
        <div
          className={`flex min-h-0 items-center justify-center gap-1 font-semibold ${typeText[primaryType]}`}
        >
          <p className="w-5 shrink-0 text-xs sm:w-8 sm:text-xl">
            {pokemon.jp_name}
          </p>
          {pokemon.sprite ? (
            <img
              className="min-w-0 max-w-[72%] object-contain"
              src={pokemon.sprite}
              alt={pokemon.en_name}
            />
          ) : (
            <img
              src="/assets/Pokemon.svg"
              alt="pokeball"
              className="border-text-primary w-20 rounded-full border-2 opacity-85 sm:w-36"
            />
          )}
        </div>
      </div>

      <div className="flex min-w-0 items-center">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-left text-xs font-medium capitalize sm:text-lg">
            {pokemon.en_name}
          </h3>
          <p className="truncate text-left text-[0.55rem] capitalize sm:text-xs">
            Habitat: {pokemon.habitat}
          </p>
        </div>
        <div className="flex shrink-0 gap-1">
          <img
            src={`/assets/${cardTypeIcons[primaryType]}`}
            alt={pokemon.en_name}
            className="w-5 sm:w-9"
          />
          {pokemon.types[1] && (
            <img
              src={`/assets/${cardTypeIcons[pokemon.types[1]]}`}
              alt={pokemon.en_name}
              className="w-5 sm:w-9"
            />
          )}
        </div>
      </div>
    </div>
  );
}
