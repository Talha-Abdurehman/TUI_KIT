/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Chip interactive primitive.
 * Selectable, dismissible tag pill with tactile feedback and token borders.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { ChipProps } from './Chip.types';

export const Chip: React.FC<ChipProps> = ({
  label,
  isSelected = false,
  onPress,
  onRemove,
  icon,
  isDisabled = false,
  style,
  testID,
}) => {
  const { colors, radius, hitSlop } = useTheme();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected, disabled: isDisabled }}
      disabled={isDisabled || !onPress}
      onPress={onPress}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        styles.chip,
        {
          borderRadius: radius.full,
          backgroundColor: isSelected ? colors.primaryDark : colors.surfaceSubtle,
          borderColor: isSelected ? colors.primaryDark : colors.borderSubtle,
        },
        isDisabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}
    >
      {icon ? <View style={styles.iconSlot}>{icon}</View> : null}

      <Text
        variant="captionMedium"
        style={{ color: isSelected ? colors.textInverse : colors.textPrimary }}
      >
        {label}
      </Text>

      {onRemove ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Remove ${label}`}
          onPress={onRemove}
          hitSlop={hitSlop}
          style={styles.removeBtn}
        >
          <Text
            variant="caption"
            style={{ color: isSelected ? colors.textInverse : colors.textMuted }}
          >
            ✕
          </Text>
        </Pressable>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    alignSelf: 'flex-start',
  },
  iconSlot: {
    marginRight: theme.spacing.xs,
  },
  removeBtn: {
    marginLeft: theme.spacing.xs,
    padding: 2,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
});
