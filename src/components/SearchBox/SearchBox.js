import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Enter movie title</span>
        <input
          type="text"
          name="movieName"
          value={movieName}
          onChange={handleNameChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
