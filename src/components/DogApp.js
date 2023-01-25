import { useState } from 'react';
import { BreedSelect } from './BreedSelect';
import { Layout } from './Layout';
import { fetchDogByBreed } from '../dogApi';
import { Dog } from './Dog';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';

export const DogApp = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async breedId => {
    try {
      setIsLoading(true);
      setError(null);
      const dog = await fetchDogByBreed(breedId);
      setDog(dog);
    } catch (error) {
      setError(
        'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <BreedSelect onSelect={fetchDog} />
      {isLoading && <DogSkeleton />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {dog && !isLoading && <Dog dog={dog} />}
    </Layout>
  );
};
