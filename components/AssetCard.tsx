import Image from "next/image";
import { ReactNode } from "react";

type AssetCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tint?: string;
  priority?: boolean;
};

export default function AssetCard({
  children,
  className = "",
  contentClassName = "",
  tint = "rgba(14, 104, 91, 0.95)",
  priority = false,
}: AssetCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <Image
        src="/Asset 1.svg"
        alt="Decorative card background"
        fill
        priority={priority}
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: tint }} />
      <div className={`relative z-10 h-full w-full ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
