import React from 'react';

const Search: React.FC<{ callback(e: { target: { value: string } }): void }> = (props) => {
  const res = JSON.parse(localStorage.getItem('term')!);
  return (
    <div style={{ display: 'flex', width: '90vw', justifyContent: 'flex-end', margin: 25 }}>
      <input type="text" onChange={props.callback} value={res} />
    </div>
  );
};

export default Search;
