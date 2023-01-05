import axios from "axios";

export const getAreaData = async (searchInput) => {
  const { data } = await axios.get(
    `https://api.zippopotam.us/GB/${searchInput}`
  );

  return data.places;
};
