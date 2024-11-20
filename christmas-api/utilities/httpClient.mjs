export const fetchData = async (endpoint) => {
  const url = `${process.env.BASE_URL}/${endpoint}?api_key=${process.env.API_KEY}&language=en-US`;

  try {
    console.log("FETCHURL", url);
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error(
      `Something went wrong with ${endpoint} and response was not ok`
    );
  } catch (e) {
    console.log(e);
    throw new Error(
      `Something bad happened in fetchdata ${endpoint}, Error: ${e}`
    );
  }
};
