import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/assets/video/jely.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient & ambient depth overlay for maximum readability & aesthetic polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,147,15,0.04),rgba(255,255,255,0))] pointer-events-none" />
    </div>
  );
};

