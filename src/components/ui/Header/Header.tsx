/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Header app bar primitive.
 * Zero arbitrary values, uses layout.headerHeight token, supports back triggers and accessories.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  leftAccessory,
  rightAccessory,
  isCenterTitle = true,
  style,
  testID,
}) => {
  const { colors, layout, hitSlop } = useTheme();

  return (
    <View
      testID={testID}
      accessibilityRole="header"
      style={[
        styles.container,
        {
          height: layout.headerHeight,
          backgroundColor: colors.surface,
          borderBottomColor: colors.borderSubtle,
        },
        style,
      ]}
    >
      {/* Left Slot */}
      <View style={styles.leftSlot}>
        {showBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={onBack}
            hitSlop={hitSlop}
            style={styles.backBtn}
          >
            <Text variant="titleMd" color="textPrimary">
              ←
            </Text>
          </Pressable>
        ) : leftAccessory ? (
          leftAccessory
        ) : null}
      </View>

      {/* Title Slot */}
      <View style={[styles.titleSlot, isCenterTitle && styles.titleCentered]}>
        <Text variant="bodyBold" color="textPrimary" numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text variant="caption" color="textSecondary" numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      {/* Right Slot */}
      <View style={styles.rightSlot}>
        {rightAccessory ? rightAccessory : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    borderBottomWidth: 1,
  },
  leftSlot: {
    minWidth: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    padding: theme.spacing.xs,
  },
  titleSlot: {
    flex: 1,
    paddingHorizontal: theme.spacing.sm,
  },
  titleCentered: {
    alignItems: 'center',
  },
  rightSlot: {
    minWidth: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
