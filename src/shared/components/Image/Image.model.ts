interface ImageProps {
  id?: string;
  alt: string;
  title?: string;
  sourceUrl: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  borderRadius?: string | number;

  marginTop?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
}

export default ImageProps;