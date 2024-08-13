import axios from 'axios';

const API_KEY = '442327b40bmsh43dc0bed890aff7p1c9ba6jsn79f2031580e5'; 
const API_HOST = 'work-out-api1.p.rapidapi.com';
const BASE_URL = `https://${API_HOST}/`;

const workoutService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

export const fetchWorkouts = async (muscle) => {
  try {
    const response = await workoutService.get('search', {
      params: { Muscles: muscle }
    });

    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching workouts:', error.response ? error.response.data : error.message);
    throw error;
  }
};
