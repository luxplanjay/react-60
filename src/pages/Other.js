import { useEffect } from 'react';
import axios from 'axios';

export const Other = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        console.log(response.data);
      } catch (error) {}
    }
    fetchData();
  }, []);

  return <main>Other page</main>;
};
