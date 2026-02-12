interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src="/assets/generated/herwellness-logo.dim_512x192.png"
      alt="Herwellness"
      className={className}
    />
  );
}
