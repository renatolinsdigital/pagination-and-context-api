type JustifyContent =
  /* Axis alignments */
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'

  /* Distribute items evenly */
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

  /* Global values */
  | 'inherit'
  | 'initial'
  | 'unset';

export default JustifyContent;
