export const fetchData = async (url) => {
  try {
    console.log("FETCHURL", url);
    const response = await fetch(url);

    if (response.ok) {
      // console.log("fetch function res", response);
      const result = await response.json();
      // console.log("Right result?", result);
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
