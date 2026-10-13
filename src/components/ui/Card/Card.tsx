/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Token-driven Card Component
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  variant = 'outlined',
  padding = 'md',
  onPress,
  style,
  children,
  testID,
  ...rest
}) => {
  const { colors, spacing, radius, shadows } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return [
          {
            backgroundColor: colors.surface,
            borderColor: colors.transparent,
          },
          shadows.md,
        ];
      case 'flat':
        return [
          {
            backgroundColor: colors.surfaceSubtle,
            borderColor: colors.transparent,
          },
        ];
      case 'outlined':
      default:
        return [
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
            borderWidth: 1,
          },
        ];
    }
  };

  const cardStyle = [
    styles.base,
    {
      padding: spacing[padding],
      borderRadius: radius.lg,
    },
    ...getVariantStyles(),
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        testID={testID}
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [cardStyle, pressed && styles.pressed]}
        {...rest}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View testID={testID} style={cardStyle} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.995 }],
  },
});
