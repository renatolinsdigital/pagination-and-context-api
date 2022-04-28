import ImageProps from './Image.model';
import ImageStyled from './ImageStyled';

function Image({
  id,
  alt,
  width,
  height,
  maxWidth,
  maxHeight,
  borderRadius,

  title,
  sourceUrl,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
}: ImageProps) {
  return (
    <ImageStyled
      id={id}
      alt={alt}
      title={title}
      src={sourceUrl}

      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      borderRadius={borderRadius}

      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
    />
  )
}

export default Image;
