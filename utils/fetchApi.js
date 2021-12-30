import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '1d6f169c36msh4f253e50b7c05a2p1c8e10jsn3b02bd02263f' ,
    },
  });
    
  return data;
}