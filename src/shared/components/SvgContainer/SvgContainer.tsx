import React from 'react';
import SvgContainerProps from './SvgContainer.model';

function SvgContainer({
  x,
  y,
  id,
  width,
  height,
  viewBox,
  children,

  marginTop,
  marginLeft,
  marginRight,
  marginBottom,

  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,

  rotationDegrees,
}: SvgContainerProps) {
  const DEFAULT_DIMENSION = 20;

  const styles = {
    margin: 0,
    marginTop,
    marginLeft,
    paddingTop,
    paddingLeft,
    marginRight,
    marginBottom,
    paddingRight,
    paddingBottom,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: rotationDegrees ? `rotate(${rotationDegrees}deg)` : 'rotate(0deg)',
  };

  return (
    <svg
      x={x}
      y={y}
      id={id}
      style={styles}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width={width || DEFAULT_DIMENSION}
      height={height || DEFAULT_DIMENSION}
      viewBox={viewBox || `0 0 ${DEFAULT_DIMENSION} ${DEFAULT_DIMENSION}`}
    >
      {children}
    </svg>
  );
}

export default SvgContainer;
