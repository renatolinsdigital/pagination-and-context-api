import Colors from './Colors.model';

interface IconProps {
  id?: string;
  title?: string;
  width?: number;
  height?: number;
  marginTop?: number;
  marginLeft?: number;
  paddingTop?: number;
  x?: number | string;
  y?: number | string;
  paddingLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  paddingRight?: number;
  paddingBottom?: number;
  rotationDegrees?: number;
  colorName?: keyof Colors;
}

export default IconProps;
