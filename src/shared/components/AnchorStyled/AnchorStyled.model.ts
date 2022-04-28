import { BoxProps } from './../../../shared/models';

type AnchorProps = BoxProps & {
  isTextBold?: boolean;
  fontSize?: string | number;
  paddingTop?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
}

export default AnchorProps;
