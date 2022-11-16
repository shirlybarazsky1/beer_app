//const API_URL = 'https://api.punkapi.com/v2/beers?page=1'
//const API_URL = 'https://api.punkapi.com/v2/beers?page=1&per_page=72'
const API_URL = "https://api.punkapi.com/v2/beers?";

export async function fetchBeers(page, per_page) {
  try {
    const response = await fetch(`${API_URL}page=${page}&per_page=${per_page}`);
    const beers = await response.json();

    return beers;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch beer");
  }
}
