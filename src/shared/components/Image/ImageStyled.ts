import styled, { CSSObject } from "styled-components";
import ImageProps from './Image.model';

const ImageStyled = styled.img<Omit<ImageProps, "sourceUrl">>(({
  width,
  height,
  maxWidth,
  maxHeight,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  borderRadius = 0
}): CSSObject => ({
  width,
  height,
  maxWidth,
  maxHeight,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  borderRadius
})
);

export default ImageStyled;

