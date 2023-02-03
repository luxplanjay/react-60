import { useEffect } from 'react';
import axios from 'axios';

export const Other = () => {
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
          {
            signal: controller.signal,
          }
        );
        console.log(response.data);
      } catch (error) {}
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return <main>Other page</main>;
};
