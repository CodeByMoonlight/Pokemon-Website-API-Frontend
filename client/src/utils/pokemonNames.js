export function getJapaneseName(speciesData, fallbackName = "") {
  const names = Array.isArray(speciesData?.names) ? speciesData.names : [];

  const jpName = names.find((entry) => {
    const lang = entry?.language?.name?.toLowerCase();
    return lang === "ja-hrkt" || lang === "ja";
  })?.name;

  return jpName || fallbackName;
}
