const baseUrl = "https://gutendex.com/books/?page=2";
export const getBooks = async () => {
  try {
    const response = await fetch(baseUrl);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.warn(error);
    return error;
  }
};
