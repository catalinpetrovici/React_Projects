import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={handleInput}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
