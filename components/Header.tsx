import React from 'react';

export default function Header() {
  const centered = {
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className="columns is-gapless is-multiline">
      <div className="column is-one-fifth">&nbsp;</div>
      <div className="column">
        <div className="is-flex m-t-10 content is-large" style={centered}>
          <h1>Location List</h1>
        </div>
      </div>
      <div className="column is-one-fifth has-text-right">&nbsp;</div>
    </div>
  );
}
