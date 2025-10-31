import { CSSProperties, ReactNode } from "react";

type CutoutPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type CutoutSize = number | { width: number; height: number };

interface CustomSVGShapeProps {
  /**
   * Width of the SVG (can be in px, rem, %, etc.)
   * @default "200px"
   */
  width?: string;

  /**
   * Height of the SVG (can be in px, rem, %, etc.)
   * @default "200px"
   */
  height?: string;

  /**
   * Fill color for the SVG shape
   * @default "#0e685b"
   */
  color?: string;

  /**
   * Additional CSS classes for the SVG container
   */
  className?: string;

  /**
   * Optional inline styles for the outer wrapper
   */
  style?: CSSProperties;

  /**
   * Rotation angle in degrees
   * @default 0
   */
  rotation?: number;

  /**
   * Opacity value (0 to 1)
   * @default 1
   */
  opacity?: number;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Hover effect
   * @default false
   */
  hoverEffect?: boolean;

  /**
   * Optional stroke color for the SVG path
   */
  strokeColor?: string;

  /**
   * Optional stroke width for the SVG path
   */
  strokeWidth?: number;

  /**
   * Optional stroke opacity for the SVG path
   */
  strokeOpacity?: number;

  /**
   * Optional custom path data overriding the default shape
   */
  pathData?: string;

  /**
   * Optional SVG definitions (gradients, patterns, etc.)
   */
  defs?: ReactNode;

  /**
   * Content rendered inside the shape (layered above the SVG)
   */
  children?: ReactNode;

  /**
   * Optional class added to the inner content wrapper
   */
  contentClassName?: string;

  /**
   * Optional inline styles for the inner content wrapper
   */
  contentStyle?: CSSProperties;

  /**
   * Optional content rendered inside the cutout area
   */
  cutoutContent?: ReactNode;

  /**
   * Cutout position (defaults to top-right)
   */
  cutoutPosition?: CutoutPosition;

  /**
   * Dimensions for the cutout area
   */
  cutoutSize?: CutoutSize;

  /**
   * Offset for the cutout area from its edges
   */
  cutoutOffset?: { x?: number; y?: number };

  /**
   * Optional class name for the cutout container
   */
  cutoutClassName?: string;

  /**
   * Optional additional styles for the cutout container
   */
  cutoutStyle?: CSSProperties;

  /**
   * Optional header text to display inside the shape
   */
  header?: string;

  /**
   * Optional description text to display inside the shape
   */
  description?: string;

  /**
   * Optional class name for the header
   */
  headerClassName?: string;

  /**
   * Optional class name for the description
   */
  descriptionClassName?: string;

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
   * SVG viewBox width (coordinate system width)
   * @default 548.4
   */
  svgWidth?: number;

  /**
   * SVG viewBox height (coordinate system height)
   * @default 536.61
   */
  svgHeight?: number;
}

/**
 * CustomSVGShape Component
 *
 * A reusable and customizable component based on Asset 1.svg
 *
 * @example
 * // Basic usage
 * <CustomSVGShape />
 *
 * @example
 * // Custom color and size
 * <CustomSVGShape width="300px" height="300px" color="#FF5733" />
 *
 * @example
 * // With rotation and opacity
 * <CustomSVGShape rotation={45} opacity={0.5} />
 *
 * @example
 * // Using gradient fill and stroke
 * <CustomSVGShape
 *   color="url(#cardGradient)"
 *   strokeColor="#0d9488"
 *   strokeWidth={4}
 *   defs={(
 *     <defs>
 *       <linearGradient id="cardGradient" x1="0%" x2="100%" y1="0%" y2="100%">
 *         <stop offset="0%" stopColor="#0d9488" />
 *         <stop offset="100%" stopColor="#0f766e" />
 *       </linearGradient>
 *     </defs>
 *   )}
 * />
 *
 * @example
 * // With hover effect, inner content, and cutout icon
 * <CustomSVGShape
 *   hoverEffect
 *   className="cursor-pointer"
 *   cutoutContent={<Play size={28} color="#0f172a" />}
 *   cutoutPosition="top-right"
 *   cutoutSize={64}
 * >
 *   <div className="flex h-full flex-col justify-center p-6 text-white">
 *     <h4 className="text-xl font-semibold">Automated HACCP Logs</h4>
 *     <p className="text-sm opacity-80">Digitize compliance records in minutes.</p>
 *   </div>
 * </CustomSVGShape>
 */
export default function CustomSVGShape({
  width = "200px",
  height = "200px",
  color = "#0e685b",
  className = "",
  style,
  rotation = 0,
  opacity = 1,
  onClick,
  hoverEffect = false,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  pathData = "M477.5,81.84c-5.25-.75-9.3-4.89-9.84-10.19V0H35.42C15.86,0,0,15.86,0,35.42v465.77c0,19.56,15.86,35.42,35.42,35.42h475.01c20.97,0,37.97-17,37.97-37.97V81.84h-70.9Z",
  defs,
  children,
  contentClassName = "",
  contentStyle,
  cutoutContent,
  cutoutPosition = "top-right",
  cutoutSize = 72,
  cutoutOffset,
  cutoutClassName = "",
  cutoutStyle,
  header,
  description,
  headerClassName = "text-yellow-400 text-2xl font-bold mb-4",
  descriptionClassName = "text-white text-base leading-relaxed",
  foldWidth = 70.9,
  foldHeight = 81.84,
  svgWidth = 548.4,
  svgHeight = 536.61,
}: CustomSVGShapeProps) {
  const hoverClass = hoverEffect
    ? "transition-all duration-300 hover:scale-110 hover:opacity-80"
    : "";

  // Generate dynamic path based on fold dimensions
  const generatePath = () => {
    if (
      pathData !==
      "M477.5,81.84c-5.25-.75-9.3-4.89-9.84-10.19V0H35.42C15.86,0,0,15.86,0,35.42v465.77c0,19.56,15.86,35.42,35.42,35.42h475.01c20.97,0,37.97-17,37.97-37.97V81.84h-70.9Z"
    ) {
      // User provided custom pathData, use it as-is
      return pathData;
    }

    // Generate path with custom fold dimensions
    const startX = svgWidth - foldWidth;
    return `M${startX},${foldHeight}c-5.25-.75-9.3-4.89-9.84-10.19V0H35.42C15.86,0,0,15.86,0,35.42v465.77c0,19.56,15.86,35.42,35.42,35.42h475.01c20.97,0,37.97-17,37.97-37.97V${foldHeight}h-${foldWidth}Z`;
  };

  const resolvedCutoutSize =
    typeof cutoutSize === "number"
      ? { width: cutoutSize, height: cutoutSize }
      : {
          width: cutoutSize.width,
          height: cutoutSize.height,
        };

  const offsetX = cutoutOffset?.x ?? 16;
  const offsetY = cutoutOffset?.y ?? 16;

  const cutoutPositionStyles: Record<CutoutPosition, CSSProperties> = {
    "top-left": { top: offsetY, left: offsetX },
    "top-right": { top: offsetY, right: offsetX },
    "bottom-left": { bottom: offsetY, left: offsetX },
    "bottom-right": { bottom: offsetY, right: offsetX },
  };

  return (
    <div
      className={`relative ${hoverClass} ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        opacity,
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        {defs}
        <path
          fill={color}
          d={generatePath()}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
        />
      </svg>

      {children ? (
        <div
          className={`absolute inset-0 ${contentClassName}`}
          style={contentStyle}
        >
          {children}
        </div>
      ) : null}

      {(header || description) && !children ? (
        <div
          className={`absolute inset-0 p-8 pt-12 z-10 ${contentClassName}`}
          style={{
            transform: `rotate(${-rotation}deg)`,
            ...contentStyle,
          }}
        >
          {header ? <h3 className={headerClassName}>{header}</h3> : null}
          {description ? (
            <p className={descriptionClassName}>{description}</p>
          ) : null}
        </div>
      ) : null}

      {cutoutContent ? (
        <div
          className={`absolute flex items-center justify-center ${cutoutClassName}`}
          style={{
            width: resolvedCutoutSize.width,
            height: resolvedCutoutSize.height,
            pointerEvents: "auto",
            ...cutoutPositionStyles[cutoutPosition],
            ...cutoutStyle,
          }}
        >
          {cutoutContent}
        </div>
      ) : null}
    </div>
  );
}
