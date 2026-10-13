/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Banner notification primitive.
 * Prominent informational card with status tint backgrounds and inline actions.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { BannerProps, BannerVariant } from './Banner.types';

export const Banner: React.FC<BannerProps> = ({
  title,
  message,
  variant = 'info',
  actionLabel,
  onAction,
  isDismissible = false,
  onDismiss,
  style,
  testID,
}) => {
  const { colors, radius } = useTheme();

  const getVariantStyles = (v: BannerVariant) => {
    switch (v) {
      case 'success':
        return {
          bg: colors.successSubtle,
          border: colors.success,
          icon: '✓',
        };
      case 'warning':
        return {
          bg: colors.warningSubtle,
          border: colors.warning,
          icon: '⚠',
        };
      case 'error':
        return {
          bg: colors.errorSubtle,
          border: colors.error,
          icon: '✕',
        };
      case 'info':
      default:
        return {
          bg: colors.infoSubtle,
          border: colors.info,
          icon: 'ℹ',
        };
    }
  };

  const currentVariant = getVariantStyles(variant);

  return (
    <View
      testID={testID}
      accessibilityRole="alert"
      style={[
        styles.banner,
        {
          backgroundColor: currentVariant.bg,
          borderColor: currentVariant.border,
          borderRadius: radius.lg,
        },
        style,
      ]}
    >
      <View style={styles.iconSlot}>
        <Text variant="titleSm">{currentVariant.icon}</Text>
      </View>

      <View style={styles.contentCol}>
        <Text variant="bodyBold" color="textPrimary">
          {title}
        </Text>
        {message ? (
          <Text variant="caption" color="textSecondary" style={styles.message}>
            {message}
          </Text>
        ) : null}

        {actionLabel ? (
          <Pressable
            accessibilityRole="button"
            onPress={onAction}
            hitSlop={theme.hitSlop}
            style={styles.actionBtn}
          >
            <Text variant="captionMedium" style={{ color: currentVariant.border }}>
              {actionLabel} →
            </Text>
          </Pressable>
        ) : null}
      </View>

      {isDismissible ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Dismiss banner"
          onPress={onDismiss}
          hitSlop={theme.hitSlop}
          style={styles.dismissBtn}
        >
          <Text variant="caption" color="textMuted">
            ✕
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    padding: theme.spacing.md,
    width: '100%',
  },
  iconSlot: {
    marginRight: theme.spacing.ms,
    marginTop: 2,
  },
  contentCol: {
    flex: 1,
  },
  message: {
    marginTop: theme.spacing.xxs,
  },
  actionBtn: {
    marginTop: theme.spacing.sm,
  },
  dismissBtn: {
    marginLeft: theme.spacing.sm,
  },
});
