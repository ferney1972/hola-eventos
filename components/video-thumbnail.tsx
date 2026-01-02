'use client';

import React from 'react';

type Props = {
  src: string;
};

export function VideoThumbnail({ src }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border shadow-sm">
      <video
        src={src}
        controls
        className="h-full w-full object-cover"
      >
        Tu navegador no soporta la etiqueta de vídeo.
      </video>
    </div>
  );
}
