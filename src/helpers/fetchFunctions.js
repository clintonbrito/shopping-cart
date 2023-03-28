export async function fetchProduct(product) {
  try {
    if (!product) throw new Error('ID não informado');
    const result = `https://api.mercadolibre.com/items/${product}`;
    const fetchApi = await fetch(result);
    const results = await fetchApi.json();
    return results;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchProductsList(query) {
  try {
    if (!query) throw new Error('Termo de busca não informado');
    const result = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const fetchApi = await fetch(result);
    const { results } = await fetchApi.json();
    return results;
  } catch (err) {
    throw new Error(err.message);
  }
}
