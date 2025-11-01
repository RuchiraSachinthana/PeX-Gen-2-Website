interface SimpleCardProps {
  /**
   * Width of the card
   * @default "100%"
   */
  width?: string;

  /**
   * Height of the card
   * @default "100%"
   */
  height?: string;

  /**
   * Background color
   * @default "#0e685b"
   */
  color?: string;

  /**
   * Width of the top-right folded corner
   * @default 70.9
   */
  foldWidth?: number;

  /**
   * Height of the top-right folded corner
   * @default 81.84
   */
  foldHeight?: number;

  /**
   * Header text
   */
  header?: string;

  /**
   * Description text
   */
  description?: string;

  /**
   * Rotation angle in degrees
   * @default 0
   */
  rotation?: number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function SimpleCard({
  width = "100%",
  height = "100%",
  color = "#0e685b",
  foldWidth = 70.9,
  foldHeight = 81.84,
  header,
  description,
  rotation = 0,
  className = "",
}: SimpleCardProps) {
  // Generate path with custom fold dimensions
  const startX = 548.4 - foldWidth;
  const pathData = `M${startX},${foldHeight}c-5.25-.75-9.3-4.89-9.84-10.19V0H35.42C15.86,0,0,15.86,0,35.42v465.77c0,19.56,15.86,35.42,35.42,35.42h475.01c20.97,0,37.97-17,37.97-37.97V${foldHeight}h-${foldWidth}Z`;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg
        viewBox="0 0 548.4 536.61"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <path fill={color} d={pathData} />
      </svg>

      {(header || description) && (
        <div
          className="absolute inset-0 p-8 pt-12 z-10"
          style={{
            transform: `rotate(${-rotation}deg)`,
          }}
        >
          {header && (
            <h3 className="text-yellow-400 text-2xl  mb-4">
              {header}
            </h3>
          )}
          {description && (
            <p className="text-white text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
