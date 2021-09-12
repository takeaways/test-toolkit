import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import qs from 'qs';
import './Search.scss';

function Search() {
  const history = useHistory();
  const [term, setTerm] = useState('');

  const handleSearchTerm = useCallback(e => {
    setTerm(e.target.value);
  }, []);

  useEffect(() => {
    const search = {
      term,
    };
    history.push({
      search: qs.stringify(search),
    });
  }, [term]);
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="search term"
        value={term}
        onChange={handleSearchTerm}
      />
    </div>
  );
}

export default Search;
