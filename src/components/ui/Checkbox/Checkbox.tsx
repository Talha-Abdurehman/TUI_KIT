/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Checkbox primitive.
 * Accessible 44x44 hitSlop, micro-press scaling, token-driven states.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onToggle,
  label,
  description,
  isDisabled = false,
  style,
  accessibilityLabel,
  testID,
}) => {
  const { colors, radius, layout, hitSlop } = useTheme();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isChecked, disabled: isDisabled }}
      accessibilityLabel={accessibilityLabel || label || 'Checkbox'}
      disabled={isDisabled}
      onPress={() => onToggle(!isChecked)}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        styles.container,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
    >
      <View
        style={[
          styles.box,
          {
            width: layout.checkboxSize,
            height: layout.checkboxSize,
            borderRadius: radius.xs,
            backgroundColor: isChecked ? colors.primary : colors.surface,
            borderColor: isChecked ? colors.primary : colors.border,
          },
        ]}
      >
        {isChecked ? (
          <Text
            variant="captionMedium"
            style={[styles.checkMark, { color: colors.primaryForeground }]}
          >
            ✓
          </Text>
        ) : null}
      </View>

      {(label || description) ? (
        <View style={styles.textContainer}>
          {label ? (
            <Text variant="bodyMedium" color={isDisabled ? 'textMuted' : 'textPrimary'}>
              {label}
            </Text>
          ) : null}
          {description ? (
            <Text variant="caption" color="textSecondary" style={styles.description}>
              {description}
            </Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: theme.spacing.xs,
  },
  box: {
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkMark: {
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 14,
  },
  textContainer: {
    flex: 1,
    marginLeft: theme.spacing.ms,
  },
  description: {
    marginTop: theme.spacing.xxs,
  },
  disabled: {
    opacity: 0.45,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
});
