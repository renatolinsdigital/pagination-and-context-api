import { useState } from 'react';
import BoxStyled from '../BoxStyled/BoxStyled';
import { TextInputProps } from './TextInput.model';
import { ReactInputEvent, KeyboardKeys } from '../../../shared/models';
import { TextInputStyled, TextInputContainerStyled } from './TextInputStyled';

function TextInput(
  {
    id,
    name,
    value,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,

    onKeyUp,
    onChange,
    onKeyDown,
    onKeyPress,
    onENTERKeyPress,

    leftIcon,
    rightIcon,
    maxLength,
    isDisabled,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 10,
    paddingLeft = 12,
    paddingRight = 12,
    paddingBottom = 10,

    isReadOnly,
    hasShakeFeedback,
    fontSize = '1rem',
    fontWeight = 'normal',
    placeHolder = 'Type here',

    colorName,
    borderRadius,
    placeHolderColorName,
  }: TextInputProps) {

  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (event: ReactInputEvent) => {
    if (onChange) onChange(event);
  }

  const handleKeyUp = (event: ReactInputEvent) => {
    if (onKeyUp) onKeyUp(event);
  }

  const handleKeyDown = (event: ReactInputEvent) => {
    if (onKeyDown) onKeyDown(event);
  }

  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(false);
  }

  const handleKeyPress = (event: ReactInputEvent) => {
    if (onKeyPress) onKeyPress(event);
    const key = event.key || event.keyCode || event.which;
    if ((key === 'Enter' || key === KeyboardKeys.ENTER) && onENTERKeyPress) {
      event.stopPropagation();
      event.preventDefault();
      onENTERKeyPress();
    }
  }

  return (
    <TextInputContainerStyled
      flex='none'
      maxWidth={maxWidth}
      minWidth={minWidth}
      maxHeight={maxHeight}
      minHeight={minHeight}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      hasShakeFeedback={hasShakeFeedback}
    >
      <BoxStyled
        left={10}
        position='absolute'
        isStretched={false}
        top="calc(50% - 10px)"
      >
        {leftIcon}
      </BoxStyled>
      <TextInputStyled
        id={id}
        flex={1}
        type="text"
        name={name}
        value={value}
        maxWidth={maxWidth}
        minWidth={minWidth}
        fontSize={fontSize}
        isFocused={isFocused}

        readOnly={isReadOnly}
        colorName={colorName}
        maxHeight={maxHeight}
        minHeight={minHeight}
        maxLength={maxLength}
        disabled={isDisabled}
        borderRadius={borderRadius}

        onKeyUp={handleKeyUp}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        onFocus={handleInputFocus}
        onKeyPress={handleKeyPress}

        fontWeight={fontWeight}
        paddingTop={paddingTop}
        paddingLeft={paddingLeft}
        placeholder={placeHolder}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}

        placeHolderColorName={placeHolderColorName}
        isLeftIconRendered={leftIcon !== undefined}
        isRightIconRendered={rightIcon !== undefined}
      />
      <BoxStyled
        right={10}
        position='absolute'
        isStretched={false}
        top="calc(50% - 10px)"
      >
        {rightIcon}
      </BoxStyled>
    </TextInputContainerStyled>
  )
}

export default TextInput;
