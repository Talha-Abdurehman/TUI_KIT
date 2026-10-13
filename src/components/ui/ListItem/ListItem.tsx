/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade ListItem mobile row primitive.
 * High-performance pressable list item with slot-based architecture and haptic scale down.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  leftAccessory,
  rightAccessory,
  valueText,
  showChevron = false,
  onPress,
  hasDivider = false,
  isDisabled = false,
  style,
  testID,
}) => {
  const { colors, hitSlop } = useTheme();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      disabled={isDisabled || !onPress}
      onPress={onPress}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        styles.row,
        hasDivider && [styles.divider, { borderBottomColor: colors.borderSubtle }],
        isDisabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}
    >
      {leftAccessory ? (
        <View style={styles.leftSlot}>{leftAccessory}</View>
      ) : null}

      <View style={styles.textCol}>
        <Text variant="bodyBold" color="textPrimary" numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text variant="caption" color="textSecondary" numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.rightSlot}>
        {valueText ? (
          <Text variant="bodySmMedium" color="textPrimary" style={styles.valueText}>
            {valueText}
          </Text>
        ) : null}
        {rightAccessory ? rightAccessory : null}
        {showChevron ? (
          <Text variant="bodySm" color="textMuted" style={styles.chevron}>
            ›
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.ms,
    paddingHorizontal: theme.spacing.sm,
    width: '100%',
  },
  divider: {
    borderBottomWidth: 1,
  },
  leftSlot: {
    marginRight: theme.spacing.ms,
  },
  textCol: {
    flex: 1,
  },
  subtitle: {
    marginTop: theme.spacing.xxs,
  },
  rightSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: theme.spacing.ms,
  },
  valueText: {
    marginRight: theme.spacing.sm,
  },
  chevron: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: theme.spacing.xs,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }],
  },
});
