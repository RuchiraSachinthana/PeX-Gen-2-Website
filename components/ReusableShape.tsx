import React, { CSSProperties, ReactNode } from "react";

export type CutoutPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ReusableShapeProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  radius?: number;
  /** Optional radius for the cutout corner; defaults to `radius` if omitted */
  cutoutRadius?: number;
  /** Enable/disable the cutout entirely (default true). When false, all 4 corners use the same radius. */
  cutout?: boolean;
  cutoutWidth?: number;
  cutoutHeight?: number;
  cutoutBgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  cutoutPosition?: CutoutPosition;
  className?: string;
  children?: ReactNode;
}

/**
 * ReusableShape Component
 *
 * Renders a rounded rectangle with a configurable inner cutout at a corner.
 * All dimensions are in px.
 */
const ReusableShape: React.FC<ReusableShapeProps> = ({
  width = 300,
  height = 200,
  color = "#0e685b",
  radius = 30,
  cutoutRadius,
  cutout = true,
  cutoutWidth = 100,
  cutoutHeight = 80,
  cutoutBgColor = "#ffffff",
  borderColor = "transparent",
  borderWidth = 0,
  cutoutPosition = "bottom-right",
  className = "",
  children,
}) => {
  // Use provided cutoutRadius if given; otherwise mirror outer radius
  const cr = cutoutRadius ?? radius;

  const toCssSize = (v: number | string | undefined, fallback: number) =>
    typeof v === "number" || typeof v === "string"
      ? typeof v === "number"
        ? `${v}px`
        : v
      : `${fallback}px`;

  const border =
    borderWidth > 0 ? `inset 0 0 0 ${borderWidth}px ${borderColor}` : "";

  const shapeStyle: CSSProperties = {
    width: toCssSize(width, 300),
    height: toCssSize(height, 200),
    backgroundColor: color,
    boxShadow: [border].filter(Boolean).join(", "),
    position: "relative",
    borderTopLeftRadius: `${radius}px`,
    borderTopRightRadius: `${radius}px`,
    borderBottomLeftRadius: `${radius}px`,
    borderBottomRightRadius: `${radius}px`,
  };

  const cutoutBaseStyle: CSSProperties = {
    width: `${cutoutWidth}px`,
    height: `${cutoutHeight}px`,
    backgroundColor: cutoutBgColor,
    position: "absolute",
  };

  const cutoutPositionStyle: CSSProperties = {};

  if (cutout) {
    switch (cutoutPosition) {
      case "top-left":
        cutoutPositionStyle.top = 0;
        cutoutPositionStyle.left = 0;
        cutoutBaseStyle.borderBottomRightRadius = `${cr}px`;
        shapeStyle.borderTopLeftRadius = undefined; // remove this corner's radius
        break;
      case "top-right":
        cutoutPositionStyle.top = 0;
        cutoutPositionStyle.right = 0;
        cutoutBaseStyle.borderBottomLeftRadius = `${cr}px`;
        shapeStyle.borderTopRightRadius = undefined;
        break;
      case "bottom-left":
        cutoutPositionStyle.bottom = 0;
        cutoutPositionStyle.left = 0;
        cutoutBaseStyle.borderTopRightRadius = `${cr}px`;
        shapeStyle.borderBottomLeftRadius = undefined;
        break;
      case "bottom-right":
      default:
        cutoutPositionStyle.bottom = 0;
        cutoutPositionStyle.right = 0;
        cutoutBaseStyle.borderTopLeftRadius = `${cr}px`;
        shapeStyle.borderBottomRightRadius = undefined;
        break;
    }
  }

  const finalCutoutStyle: CSSProperties | null = cutout
    ? { ...cutoutBaseStyle, ...cutoutPositionStyle }
    : null;

  return (
    <div className={className} style={shapeStyle}>
      {/* Foreground content */}
      <div className="relative z-10 p-6">{children}</div>
      {/* Cutout block */}
      {finalCutoutStyle && <div style={finalCutoutStyle} />}
    </div>
  );
};

export default ReusableShape;
