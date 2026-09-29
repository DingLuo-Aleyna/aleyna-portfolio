import React from 'react';
import Image from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function AppImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: AppImageProps) {
  // 沒有圖片的項目（例如還沒有縮圖的論文）直接不渲染，避免破圖
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
