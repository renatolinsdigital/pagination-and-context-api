import { TextElementProps } from "../../../shared/models";

type TitleProps = TextElementProps & {
  isSubHeading?: boolean;
  isInUpperCase?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default TitleProps;
