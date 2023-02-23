import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/?key=33208441-52fb7929803924197e6b021fa&image_type=photo&orientation=horizontal" ;

 const fetchImages = async (query, page) => {
    const response = await axios.get(`&q=${query}&page=${page}&per_page=12`)

  return response.data;
};

export default fetchImages