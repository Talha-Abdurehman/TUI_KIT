/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Wise-style Currency Balance Card
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';
import { CurrencyCardProps } from './CurrencyCard.types';

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currencyCode,
  currencyName,
  amount,
  flagEmoji = '💱',
  isAddCard = false,
  onPress,
  style,
  testID,
}) => {
  const { colors, spacing, radius, shadows } = useTheme();

  if (isAddCard) {
    return (
      <Pressable
        testID={testID}
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          styles.addCard,
          {
            backgroundColor: colors.surfaceSubtle,
            borderColor: colors.borderSubtle,
            borderRadius: radius.xl,
            padding: spacing.md,
          },
          pressed && styles.pressed,
          style,
        ]}
      >
        <View style={[styles.flagCircle, { backgroundColor: colors.surfaceHover }]}>
          <Text variant="titleSm">+</Text>
        </View>
        <View style={styles.addContent}>
          <Text variant="bodyBold" style={{ color: colors.textPrimary }}>
            Open balance
          </Text>
          <Text variant="caption" color="textSecondary">
            Hold 40+ currencies
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderRadius: radius.xl,
          padding: spacing.md,
        },
        shadows.sm,
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={styles.topRow}>
        <View style={[styles.flagCircle, { backgroundColor: colors.surfaceSubtle }]}>
          <Text variant="titleSm">{flagEmoji}</Text>
        </View>
        <Text variant="captionMedium" color="textMuted">
          {currencyCode}
        </Text>
      </View>

      <View style={styles.bottomBlock}>
        <Text variant="titleLg" style={{ color: colors.textPrimary, letterSpacing: -0.5 }}>
          {amount}
        </Text>
        <Text variant="caption" color="textSecondary" numberOfLines={1}>
          {currencyName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 160,
    borderWidth: 1,
    justifyContent: 'space-between',
    marginRight: 12,
  },
  addCard: {
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addContent: {
    marginTop: 12,
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flagCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBlock: {
    marginTop: 'auto',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
