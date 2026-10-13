/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade standalone Switch primitive.
 * Zero arbitrary values, uses layout tokens, smooth sliding thumb.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  isDisabled = false,
  accessibilityLabel = 'Switch toggle',
  style,
  testID,
}) => {
  const { colors, radius, layout, hitSlop } = useTheme();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled: isDisabled }}
      accessibilityLabel={accessibilityLabel}
      disabled={isDisabled}
      onPress={() => onValueChange(!value)}
      hitSlop={hitSlop}
      style={[
        styles.track,
        {
          width: layout.switchWidth,
          height: layout.switchHeight,
          borderRadius: radius.full,
          backgroundColor: value ? colors.primary : colors.surfaceSubtle,
          borderColor: value ? colors.primaryDark : colors.border,
        },
        isDisabled && styles.disabled,
        style,
      ]}
    >
      <View
        style={[
          styles.thumb,
          {
            width: layout.switchThumbSize,
            height: layout.switchThumbSize,
            borderRadius: radius.full,
            backgroundColor: value ? colors.primaryForeground : colors.surface,
            transform: [
              {
                translateX: value
                  ? layout.switchWidth - layout.switchThumbSize - 6
                  : 2,
              },
            ],
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  track: {
    borderWidth: 1.5,
    justifyContent: 'center',
  },
  thumb: {
    shadowColor: theme.colors.textPrimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  disabled: {
    opacity: 0.45,
  },
});
