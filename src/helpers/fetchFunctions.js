export const fetchProduct = () => {
  // seu código aqui
};

export async function fetchProductsList(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (!query) throw new Error('Termo de busca não informado');
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
}
