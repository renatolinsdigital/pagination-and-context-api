import { ReactNode } from 'react';
import { BoxProps } from "../../../shared/models";

type SvgContainerProps = Omit<BoxProps, 'theme'> & {
  id?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  x?: number | string;
  y?: number | string;
  children: ReactNode;
  rotationDegrees?: number;
};

export default SvgContainerProps;
