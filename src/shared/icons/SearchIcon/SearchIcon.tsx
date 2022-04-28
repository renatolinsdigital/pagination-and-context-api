import { IconProps } from '../../models';
import { SvgContainer } from '../../../shared/components';
import { theme } from '../../../theme/theme';

function SearchIcon({
  id,
  title,
  width = 18,
  height = 18,

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0,

  rotationDegrees,
  colorName = 'primaryDefault',
}: IconProps) {
  const { colors } = theme;
  const fillColor = colors[colorName];

  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      marginTop={marginTop}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      marginRight={marginRight}
      paddingRight={paddingRight}
      marginBottom={marginBottom}
      viewBox="0 0 191.475 192.527"
      paddingBottom={paddingBottom}
      rotationDegrees={rotationDegrees}
    >
      <>
        <title>{title || 'Search Icon'}</title>
        <path
          fill={fillColor}
          d={`M 85.49999237060547 148.9999847412109 C 99.46544647216797 148.9999847412109 \
          112.7085342407227 144.5589904785156 123.7976226806641 136.1570281982422 L \
          130.3757019042969 131.1729888916016 L 135.4755401611328 124.6810302734375 C \
          144.3233032226562 113.4180374145508 148.9999847412109 99.86944580078125 \
          148.9999847412109 85.49998474121094 C 148.9999847412109 50.48598861694336 \
          120.5139923095703 21.9999885559082 85.49999237060547 21.9999885559082 C \
          50.48598861694336 21.9999885559082 21.9999885559082 50.48598861694336 \
          21.9999885559082 85.49998474121094 C 21.9999885559082 120.5139846801758 \
          50.48598861694336 148.9999847412109 85.49999237060547 148.9999847412109 M \
          180.4747619628906 192.5269012451172 C 177.6595764160156 192.5269012451172 \
          174.8443603515625 191.4529418945312 172.6964874267578 189.3051300048828 L \
          137.0836181640625 153.6922149658203 C 122.7452163696289 164.5560760498047 \
          104.876350402832 170.9999847412109 85.49999237060547 170.9999847412109 C \
          38.27971649169922 170.9999847412109 -1.060902013705345e-05 132.7203063964844 \
          -1.060902013705345e-05 85.49998474121094 C -1.060902013705345e-05 38.27971649169922 \
          38.27971649169922 -1.155229074356612e-05 85.49999237060547 -1.155229074356612e-05 C \
          132.7203063964844 -1.155229074356612e-05 170.9999847412109 38.27971649169922 \
          170.9999847412109 85.49998474121094 C 170.9999847412109 105.4153060913086 \
          164.1929016113281 123.7378082275391 152.7758483886719 138.2714385986328 L \
          188.2529907226562 173.7486267089844 C 192.5487213134766 178.0443115234375 \
          192.5487213134766 185.0093994140625 188.2529907226562 189.3051300048828 C \
          186.1051788330078 191.4529418945312 183.2899475097656 192.5269012451172 \
          180.4747619628906 192.5269012451172 Z`}>
        </path>
      </>
    </SvgContainer>
  );
}

export default SearchIcon;