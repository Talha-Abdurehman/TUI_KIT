/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * CircularProgress component - pure React Native zero-dependency ring indicator
 */
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';
import type { CircularProgressProps, CircularProgressSize } from './CircularProgress.types';

const SIZE_PRESETS: Record<CircularProgressSize, { size: number; strokeWidth: number }> = {
  sm: { size: 44, strokeWidth: 4 },
  md: { size: 64, strokeWidth: 6 },
  lg: { size: 88, strokeWidth: 8 },
};

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 'md',
  strokeWidth: customStrokeWidth,
  color,
  trackColor,
  showLabel = true,
  label,
  style,
  accessibilityLabel,
}) => {
  const theme = useTheme();

  const { diameter, stroke } = useMemo(() => {
    if (typeof size === 'number') {
      return {
        diameter: size,
        stroke: customStrokeWidth ?? Math.max(3, Math.round(size * 0.1)),
      };
    }
    const preset = SIZE_PRESETS[size] ?? SIZE_PRESETS.md;
    return {
      diameter: preset.size,
      stroke: customStrokeWidth ?? preset.strokeWidth,
    };
  }, [size, customStrokeWidth]);

  const activeColor = color ?? theme.colors.primary;
  const inactiveColor = trackColor ?? theme.colors.surfaceSubtle;
  const clamped = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));

  const rotRight = clamped > 50 ? 180 : (clamped / 50) * 180;
  const rotLeft = clamped > 50 ? ((clamped - 50) / 50) * 180 : 0;
  const radius = diameter / 2;

  const fontVariant = diameter <= 48 ? 'caption' : diameter <= 72 ? 'bodySmMedium' : 'titleSm';

  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: clamped }}
      accessibilityLabel={accessibilityLabel ?? `Progress ${Math.round(clamped)} percent`}
      style={[
        styles.container,
        {
          width: diameter,
          height: diameter,
        },
        style,
      ]}
    >
      {/* Background Track Circle */}
      <View
        style={[
          styles.track,
          {
            width: diameter,
            height: diameter,
            borderRadius: radius,
            borderWidth: stroke,
            borderColor: inactiveColor,
          },
        ]}
      />

      {/* Right Half Progress Container (0% to 50%) */}
      <View
        style={[
          styles.halfContainer,
          {
            width: radius,
            height: diameter,
            left: radius,
          },
        ]}
      >
        <View
          style={[
            styles.spinner,
            {
              width: diameter,
              height: diameter,
              borderRadius: radius,
              borderWidth: stroke,
              borderColor: activeColor,
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
              borderBottomColor: 'transparent',
              left: -radius,
              transform: [{ rotate: `${rotRight}deg` }],
            },
          ]}
        />
      </View>

      {/* Left Half Progress Container (50% to 100%) */}
      <View
        style={[
          styles.halfContainer,
          {
            width: radius,
            height: diameter,
            left: 0,
          },
        ]}
      >
        <View
          style={[
            styles.spinner,
            {
              width: diameter,
              height: diameter,
              borderRadius: radius,
              borderWidth: stroke,
              borderColor: activeColor,
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
              borderBottomColor: 'transparent',
              left: 0,
              transform: [{ rotate: `${rotLeft}deg` }],
            },
          ]}
        />
      </View>

      {/* Center Label */}
      {showLabel ? (
        <View style={styles.centerContainer} pointerEvents="none">
          <Text variant={fontVariant} color="textPrimary">
            {label ?? `${Math.round(clamped)}%`}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  halfContainer: {
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },
  spinner: {
    position: 'absolute',
    top: 0,
  },
  centerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
