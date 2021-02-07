import React from 'react';

import Link from 'next/link';
import type { Cities } from 'types';

function ThumbnailCity({ data }: { data: Cities }) {
  return (
    <Link
      href={{
        pathname: `/location/${data.slug}`,
        query: { id: data.id }
      }}
    >
      <div className="column is-one-quarter-desktop is-half-tablet is-clickable thumbnail-city">
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={`${data.headerPhotoThumbnail}`} alt={data.name} />
            </figure>
            <div className="card-content is-overlay is-clipped">
              <span className="tag is-info">{data.name}</span>
            </div>
          </div>
          <footer className="card-footer">
            <span className="card-footer-item title-height ellipsis is-ellipsis-2">{data.titleTag}</span>
          </footer>
        </div>
      </div>
    </Link>
  );
}

export default ThumbnailCity;
