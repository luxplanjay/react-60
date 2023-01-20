import { Component } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';
import { fetchBreeds } from '../api';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: null });
      const breeds = await fetchBreeds();
      this.setState({ breeds });
    } catch (error) {
      this.setState({
        error: 'Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  makeOptions = () => {
    return this.state.breeds.map(breed => ({
      label: breed.name,
      value: breed.id,
    }));
  };

  render() {
    const { isLoading, error } = this.state;
    const { onSelect } = this.props;
    const options = this.makeOptions();

    return (
      <div>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={option => onSelect(option.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}
