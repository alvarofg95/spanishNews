import React from 'react';

export default ({ src, className, alt, width, onClick }) => {
  return <img src={src} width={width} className={className} alt={alt} title={alt} onClick={onClick} />;
};
