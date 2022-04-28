import SpinnerProps from './Spinner.model';
import { SvgContainer } from '../../components';
import { theme } from './../../../theme/theme';

function Spinner({
  id,
  title,
  width = 50,
  height = 50,

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0,

  rotationSpeed = 50,
  colorName = 'primaryLight'
}: SpinnerProps) {
  const { colors } = theme;
  const durationMath = 100 / (rotationSpeed * 2);
  const duration = rotationSpeed !== 0 ? durationMath : 1;
  const strokeColor = colorName ? colors[colorName] : colors.primaryLight;

  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      marginTop={marginTop}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      marginRight={marginRight}
      paddingRight={paddingRight}
      marginBottom={marginBottom}
      paddingBottom={paddingBottom}
    >
      <>
        <title>{title || 'Spinner'}</title>
        {/* Raw SVG data from  https://loading.io */}
        <circle
          r="35"
          cx="50"
          cy="50"
          fill="none"
          stroke={strokeColor}
          strokeWidth={width <= 50 ? 10 : 8}
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            type="rotate"
            keyTimes="0;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
            attributeName="transform"
            values="0 50 50;360 50 50"
          />
        </circle>
      </>
    </SvgContainer>
  );
}

export default Spinner;

