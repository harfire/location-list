import React from 'react';

export default function Loading() {
  return (
    <div className="columns is-multiline is-gapless">
      <div className="column is-full">
        <div className="is-clearfix">
          <span className="has-text-weight-semibold">Loading... </span>
          <span className="icon has-text-grey">
            <i className="fas fa-spinner fa-pulse"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
