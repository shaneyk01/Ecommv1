import React from 'react';


const FALLBACK_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="14" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage Not Available%3C/text%3E%3C/svg%3E';


export const useImageFallback = (imageUrl) => {
  return imageUrl || FALLBACK_IMAGE;
};


export const ImageWithFallback = ({ src, alt, ...props }) => {
  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <img
      src={src || FALLBACK_IMAGE}
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
};
