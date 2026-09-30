import React from 'react';

interface OahaLogoProps {
  className?: string;
  size?: number | string;
}

export const OahaLogo: React.FC<OahaLogoProps> = ({
  className = "w-[120px] h-[80px]",
  size
}) => {
  const style = size ? { width: size, height: typeof size === "number" ? size * 0.67 : undefined } : undefined;

  return (
    <svg viewBox="0 0 300 200" className={`select-none ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="300" height="200" fill="#FFFFFF" />
      <rect x="0" y="0" width="115" height="92" fill="#2BB7BA" />
      <rect x="185" y="0" width="115" height="92" fill="#3AB03A" />
      <rect x="0" y="108" width="115" height="92" fill="#FF9900" />
      <rect x="185" y="108" width="115" height="92" fill="#969696" />
      <circle cx="150" cy="46" r="24" fill="none" stroke="#1a2521" strokeWidth="14" />
      <path d="M 0 200 L 115 108 L 115 200" fill="none" stroke="#1a2521" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
      <line x1="138" y1="108" x2="138" y2="200" stroke="#1a2521" strokeWidth="14" strokeLinecap="square" />
      <line x1="162" y1="108" x2="162" y2="200" stroke="#1a2521" strokeWidth="14" strokeLinecap="square" />
      <path d="M 185 200 L 185 108 L 300 200" fill="none" stroke="#1a2521" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
      <line x1="15" y1="158" x2="285" y2="158" stroke="#1a2521" strokeWidth="14" strokeLinecap="square" />
    </svg>
  );
};

export default OahaLogo;
