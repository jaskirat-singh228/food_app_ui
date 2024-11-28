import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';

const CommonTextInputComponent = forwardRef(({
  textInputStyle,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  onFocus,
  maxLength
}, ref) => {
  return (
    <TextInput
      style={textInputStyle}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      maxLength={maxLength}
      ref={ref}
    />
  );
});

export default CommonTextInputComponent;
