export const fetchData = async (url) => {
  try {
    console.log("FETCHURL", url);
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error(
      `Something went wrong with URL: ${url} and response was not ok`
    );
  } catch (e) {
    console.log(e);
    throw new Error(
      `Something bad happened in fetchdata URL: ${url}, Error: ${e}`
    );
  }
};
