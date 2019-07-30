import React from 'react';
import { formatDate } from '../utils/postToAPI';

export default ({ item }) => (
  <a className="itemNew" href={item.link} target="blank" title={item.title}>
    {item.image !== '' ? <img src={item.image} alt={item.title} /> : null}
    <p className="itemTitle">{item.title}</p>
    {item.isoDate ? <p className="itemDate">{formatDate(item.isoDate)}</p> : null}
    <p className="itemDescription">{item.description}</p>
  </a>
);
