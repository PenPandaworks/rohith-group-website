interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

function Logo({ className = "h-12", style }: LogoProps) {
  const defaultStyle: React.CSSProperties = { width: 'auto', height: '100%', objectFit: 'contain' };
  
  return (
    <img
      src="/header footer and age verification logo.png"
      alt="ROHITH GROUP Logo"
      className={className}
      style={style ?? defaultStyle}
    />
  );
}

export default Logo;

