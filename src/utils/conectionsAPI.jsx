import axios from "axios";

const BASE_URL = "https://65095ce3f6553137159b46b9.mockapi.io/CarRental/";

async function getAllCars() {
    try {
          const url = `${BASE_URL}`;
          const response = await axios.get(url);
  
          console.log('data.results', response.data);
  
          return response.data;
  
      } catch (error) {
          alert('Oops, we have a problem');
      } 
  }

export default getAllCars;