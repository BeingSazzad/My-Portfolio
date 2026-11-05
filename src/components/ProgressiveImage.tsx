import React, { useState } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Shimmering Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div className="skeleton-shimmer absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-[#fff95b] animate-spin opacity-60" />
        </div>
      )}

      {/* Fallback for Broken/Error State */}
      {hasError ? (
        <div className="absolute inset-0 bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-white/40 gap-2 p-4">
          <i className="ri-image-line text-2xl" />
          <span className="text-[11px] font-mono">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`${className} transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};
