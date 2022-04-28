import { TextElementProps } from "../../../shared/models";

type TextProps = TextElementProps & {
  as?:
  'p'
  | 'b'
  | 'em'
  | 'del'
  | 'sub'
  | 'sup'
  | 'ins'
  | 'mark'
  | 'span'
  | 'small'
  | 'strong';
  cursor?: string;
};

export default TextProps;
