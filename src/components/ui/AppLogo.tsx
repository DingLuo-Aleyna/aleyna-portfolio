import React from 'react';

interface AppLogoProps {
  size?: number;
}

export default function AppLogo({ size = 28 }: AppLogoProps) {
  return (
    <div
      className="rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
      aria-hidden="true"
    >
      A
    </div>
  );
}
