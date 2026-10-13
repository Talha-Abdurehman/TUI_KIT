/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Toast notification primitive.
 * Floating snackbar with semantic state icons, micro-press dismiss, and action buttons.
 */

import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { ToastProps, ToastVariant } from './Toast.types';

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = 'info',
  isVisible,
  onDismiss,
  actionLabel,
  onAction,
  style,
  testID,
}) => {
  const { colors, radius, layout, shadows } = useTheme();

  if (!isVisible) return null;

  const getVariantStyles = (v: ToastVariant) => {
    switch (v) {
      case 'success':
        return {
          icon: '✓',
          indicatorColor: colors.success,
        };
      case 'error':
        return {
          icon: '✕',
          indicatorColor: colors.error,
        };
      case 'warning':
        return {
          icon: '⚠',
          indicatorColor: colors.warning,
        };
      case 'info':
      default:
        return {
          icon: 'ℹ',
          indicatorColor: colors.info,
        };
    }
  };

  const currentStyles = getVariantStyles(variant);

  return (
    <View
      testID={testID}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      style={[
        styles.toast,
        {
          backgroundColor: colors.surface,
          borderColor: colors.borderSubtle,
          borderRadius: radius.lg,
          maxWidth: layout.toastMaxWidth,
        },
        shadows.md,
        style,
      ]}
    >
      <View
        style={[
          styles.badgeDot,
          {
            backgroundColor: currentStyles.indicatorColor,
            borderRadius: radius.full,
          },
        ]}
      >
        <Text variant="captionMedium" style={styles.badgeIcon}>
          {currentStyles.icon}
        </Text>
      </View>

      <Text variant="bodySmMedium" color="textPrimary" style={styles.message}>
        {message}
      </Text>

      {actionLabel ? (
        <Pressable
          accessibilityRole="button"
          onPress={onAction}
          hitSlop={theme.hitSlop}
          style={styles.actionBtn}
        >
          <Text variant="captionMedium" color="primary">
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}

      {onDismiss ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Dismiss toast"
          onPress={onDismiss}
          hitSlop={theme.hitSlop}
          style={styles.closeBtn}
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
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.ms,
    width: '100%',
    alignSelf: 'center',
  },
  badgeDot: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.ms,
  },
  badgeIcon: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
  },
  message: {
    flex: 1,
  },
  actionBtn: {
    marginLeft: theme.spacing.ms,
    paddingVertical: theme.spacing.xxs,
  },
  closeBtn: {
    marginLeft: theme.spacing.ms,
  },
});
