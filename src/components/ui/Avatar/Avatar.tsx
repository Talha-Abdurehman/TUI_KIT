/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Avatar component.
 * Supports image photographs, automatic initial extraction, custom icons, and size presets.
 */

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { AvatarProps, AvatarSize, AvatarVariant } from './Avatar.types';

function getInitials(name?: string): string {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  source,
  icon,
  size = 'md',
  variant = 'subtle',
  style,
  accessibilityLabel,
  testID,
}) => {
  const { colors, radius, layout } = useTheme();

  const getDimension = (s: AvatarSize): number => {
    switch (s) {
      case 'sm':
        return layout.avatarSm;
      case 'lg':
        return layout.avatarLg;
      case 'xl':
        return layout.avatarXl;
      case 'md':
      default:
        return layout.avatarMd;
    }
  };

  const dimension = getDimension(size);
  const initials = getInitials(name);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary,
          borderColor: colors.transparent,
          textColor: colors.primaryForeground,
        };
      case 'outline':
        return {
          backgroundColor: colors.transparent,
          borderColor: colors.border,
          textColor: colors.textPrimary,
        };
      case 'subtle':
      default:
        return {
          backgroundColor: colors.surfaceSubtle,
          borderColor: colors.borderSubtle,
          textColor: colors.textPrimary,
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <View
      testID={testID}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel || name || 'Avatar'}
      style={[
        styles.base,
        {
          width: dimension,
          height: dimension,
          borderRadius: radius.full,
          backgroundColor: variantStyles.backgroundColor,
          borderColor: variantStyles.borderColor,
        },
        style,
      ]}
    >
      {source ? (
        <Image
          source={source}
          style={[
            styles.image,
            {
              width: dimension,
              height: dimension,
              borderRadius: radius.full,
            },
          ]}
        />
      ) : icon ? (
        icon
      ) : (
        <Text
          variant={size === 'sm' ? 'captionMedium' : size === 'xl' ? 'titleMd' : 'bodySmMedium'}
          style={{ color: variantStyles.textColor }}
        >
          {initials}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
});
