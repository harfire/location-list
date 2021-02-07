import React from 'react';

function Title({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div className="content is-large">
      <div className="has-text-weight-semibold has-text-primary is-size-6 is-uppercase">{title}</div>
      <div className="has-text-weight-semibold is-size-4 is-capitalized">{subTitle}</div>
    </div>
  );
}

export default Title;
