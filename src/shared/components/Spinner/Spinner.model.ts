import { IconProps } from '../../../shared/models';
import { Colors } from './../../../shared/models';

type SpinnerProps =
  Omit<IconProps, 'rotationDegrees'> & {
    rotationSpeed?: number;
    colorName?: keyof Colors;
  }

export default SpinnerProps;
