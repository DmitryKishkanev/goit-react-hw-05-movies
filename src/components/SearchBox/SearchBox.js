import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormLabel,
  SearchFormSpan,
  SearchFormInput,
  SearchFormButton,
} from 'components/SearchBox/SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = event => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      toast.warn('Enter movie title');
      return;
    }
    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormLabel>
        <SearchFormSpan>Enter movie title</SearchFormSpan>
        <SearchFormInput
          type="text"
          name="movieName"
          value={movieName}
          onChange={handleNameChange}
        />
      </SearchFormLabel>

      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
