import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      authorization: "Client-ID siRez4eNhtiGYJp0-Zt4FsvXR-q8K3QEu-ZIWpeE9W0",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
