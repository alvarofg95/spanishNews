import React from 'react';
import NewItem from './NewItem';

export default ({ news, height }) => (
  <div className="newsListDiv" style={{ maxHeight: height }}>
    {news && news.length ? news.map((n, i) => <NewItem key={`item_${i}`} item={n} />) : null}
  </div>
);
