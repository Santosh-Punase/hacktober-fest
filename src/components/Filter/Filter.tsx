import React from 'react';

import './filter.css';

interface Props {
  setOption: (label: 'language' | 'labels', value: string) => void;
  onSearchClick: () => void;
}

const Filter: React.FC<Props> = ({ setOption, onSearchClick }: Props) => {

  return (
    <div className="filter-row">
      <input type="text" name="language" id="Language"
        placeholder="language" onChange={({ target }) => setOption('language', target.value)} />
      <input type="text" name="label" id="Label"
        placeholder="label" onChange={({ target }) => setOption('labels', target.value)} />
      <button onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default Filter;
