import React from 'react';

export default ({ src, className, alt, width }) => {
  return <img src={src} width={width} className={className} alt={alt} />;
};
