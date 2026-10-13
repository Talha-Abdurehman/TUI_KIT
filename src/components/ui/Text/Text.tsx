/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Token-driven Typography Primitive
 */

import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';
import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'textPrimary',
  align,
  style,
  children,
  testID,
  ...rest
}) => {
  const { colors, typography } = useTheme();

  const presetStyle = typography.presets[variant] || typography.presets.body;
  const textColor = colors[color] || colors.textPrimary;

  return (
    <NativeText
      testID={testID}
      style={[
        presetStyle,
        { color: textColor },
        align ? { textAlign: align } : null,
        style,
      ]}
      {...rest}
    >
      {children}
    </NativeText>
  );
};
