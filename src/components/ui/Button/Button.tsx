/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade, accessible Button primitive.
 */

import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  leftIcon,
  rightIcon,
  style,
  children,
  testID,
  ...pressableProps
}) => {
  const { colors, spacing, radius, hitSlop } = useTheme();

  const isInteractive = !isDisabled && !isLoading;

  // Determine container background, border, and text colors based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: colors.surfaceSubtle,
          border: colors.border,
          text: colors.textPrimary,
          loaderColor: colors.textPrimary,
        };
      case 'outline':
        return {
          bg: colors.transparent,
          border: colors.border,
          text: colors.textPrimary,
          loaderColor: colors.textPrimary,
        };
      case 'ghost':
        return {
          bg: colors.transparent,
          border: colors.transparent,
          text: colors.textPrimary,
          loaderColor: colors.textPrimary,
        };
      case 'danger':
        return {
          bg: colors.error,
          border: colors.transparent,
          text: colors.errorForeground,
          loaderColor: colors.errorForeground,
        };
      case 'primary':
      default:
        return {
          bg: colors.primary,
          border: colors.transparent,
          text: colors.primaryForeground,
          loaderColor: colors.primaryForeground,
        };
    }
  };

  const currentVariant = getVariantStyles();

  // Size dimensions
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          height: 36,
          paddingHorizontal: spacing.sm,
          textVariant: 'bodySmMedium' as const,
        };
      case 'lg':
        return {
          height: 52,
          paddingHorizontal: spacing.lg,
          textVariant: 'bodyBold' as const,
        };
      case 'md':
      default:
        return {
          height: 44,
          paddingHorizontal: spacing.md,
          textVariant: 'bodyMedium' as const,
        };
    }
  };

  const currentSize = getSizeStyles();

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: !isInteractive, busy: isLoading }}
      disabled={!isInteractive}
      hitSlop={size === 'sm' ? hitSlop : undefined}
      style={({ pressed }) => [
        styles.base,
        {
          height: currentSize.height,
          paddingHorizontal: currentSize.paddingHorizontal,
          backgroundColor: currentVariant.bg,
          borderColor: currentVariant.border,
          borderRadius: radius.md,
        },
        isFullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && isInteractive && styles.pressed,
        style,
      ]}
      {...pressableProps}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={currentVariant.loaderColor}
          style={styles.loader}
        />
      ) : (
        <View style={styles.contentRow}>
          {leftIcon ? <View style={styles.iconLeft}>{leftIcon}</View> : null}
          {children ? (
            children
          ) : (
            <Text
              variant={currentSize.textVariant}
              style={{ color: currentVariant.text }}
            >
              {label}
            </Text>
          )}
          {rightIcon ? <View style={styles.iconRight}>{rightIcon}</View> : null}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.45,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  loader: {
    paddingVertical: 2,
  },
});
