/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Radio and RadioGroup primitives.
 * Accessible circular radio selector with inner dot animation and token colors.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { RadioGroupProps, RadioOption, RadioProps } from './Radio.types';

export const Radio: React.FC<RadioProps> = ({
  isSelected,
  onSelect,
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
      accessibilityRole="radio"
      accessibilityState={{ selected: isSelected, disabled: isDisabled }}
      accessibilityLabel={accessibilityLabel || label || 'Radio'}
      disabled={isDisabled}
      onPress={onSelect}
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
          styles.outerCircle,
          {
            width: layout.radioSize,
            height: layout.radioSize,
            borderRadius: radius.full,
            borderColor: isSelected ? colors.primaryDark : colors.border,
            backgroundColor: colors.surface,
          },
        ]}
      >
        {isSelected ? (
          <View
            style={[
              styles.innerDot,
              {
                width: layout.radioDotSize,
                height: layout.radioDotSize,
                borderRadius: radius.full,
                backgroundColor: colors.primaryDark,
              },
            ]}
          />
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

export function RadioGroup<T extends string = string>({
  options,
  value,
  onChange,
  style,
  testID,
}: RadioGroupProps<T>) {
  return (
    <View testID={testID} accessibilityRole="radiogroup" style={[styles.group, style]}>
      {options.map((option) => (
        <Radio
          key={option.value}
          isSelected={option.value === value}
          onSelect={() => onChange(option.value)}
          label={option.label}
          description={option.description}
          isDisabled={option.isDisabled}
          style={styles.groupItem}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: theme.spacing.xs,
  },
  outerCircle: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  innerDot: {},
  textContainer: {
    flex: 1,
    marginLeft: theme.spacing.ms,
  },
  description: {
    marginTop: theme.spacing.xxs,
  },
  group: {
    gap: theme.spacing.sm,
  },
  groupItem: {
    paddingVertical: theme.spacing.xs,
  },
  disabled: {
    opacity: 0.45,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
});
