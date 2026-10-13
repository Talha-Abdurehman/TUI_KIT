/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Token-driven Badge Primitive
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';
import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  children,
  style,
  testID,
}) => {
  const { colors, spacing, radius } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: colors.surfaceSubtle,
          border: colors.transparent,
          text: colors.textSecondary,
        };
      case 'success':
        return {
          bg: colors.successSubtle,
          border: colors.transparent,
          text: colors.success,
        };
      case 'warning':
        return {
          bg: colors.warningSubtle,
          border: colors.transparent,
          text: colors.warning,
        };
      case 'error':
        return {
          bg: colors.errorSubtle,
          border: colors.transparent,
          text: colors.error,
        };
      case 'info':
        return {
          bg: colors.infoSubtle,
          border: colors.transparent,
          text: colors.info,
        };
      case 'outline':
        return {
          bg: colors.transparent,
          border: colors.border,
          text: colors.textPrimary,
        };
      case 'primary':
      default:
        return {
          bg: colors.primary,
          border: colors.transparent,
          text: colors.primaryForeground,
        };
    }
  };

  const v = getVariantStyles();
  const isSm = size === 'sm';

  return (
    <View
      testID={testID}
      style={[
        styles.base,
        {
          backgroundColor: v.bg,
          borderColor: v.border,
          borderWidth: variant === 'outline' ? 1 : 0,
          borderRadius: radius.full,
          paddingHorizontal: isSm ? spacing.xs : spacing.sm,
          paddingVertical: isSm ? 2 : spacing.xxs,
        },
        style,
      ]}
    >
      {children ? (
        children
      ) : (
        <Text
          variant={isSm ? 'caption' : 'captionMedium'}
          style={{ color: v.text }}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
