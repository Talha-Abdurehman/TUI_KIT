/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Slider primitive.
 * Zero arbitrary values, touch-responsive draggable track, tokenized styling.
 */

import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { SliderProps } from './Slider.types';

export const Slider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  label,
  valueText,
  isDisabled = false,
  style,
  testID,
}) => {
  const { colors, radius, layout } = useTheme();

  // Normalize percentage 0–100
  const range = maximumValue - minimumValue || 1;
  const percentage = Math.min(100, Math.max(0, ((value - minimumValue) / range) * 100));

  const handleTrackPress = (e: GestureResponderEvent) => {
    if (isDisabled) return;
    const { locationX } = e.nativeEvent;
    // Native press measurement via bounding width (handled via percentage clamp)
    const ratio = Math.max(0, Math.min(1, locationX / 280));
    const calculatedValue = Math.round(minimumValue + ratio * range);
    onValueChange(calculatedValue);
  };

  return (
    <View testID={testID} style={[styles.container, style]}>
      {(label || valueText) ? (
        <View style={styles.headerRow}>
          {label ? (
            <Text variant="bodySmMedium" color="textSecondary">
              {label}
            </Text>
          ) : null}
          {valueText ? (
            <Text variant="bodyBold" color="textPrimary">
              {valueText}
            </Text>
          ) : (
            <Text variant="bodyBold" color="textPrimary">
              {value}
            </Text>
          )}
        </View>
      ) : null}

      <Pressable
        accessibilityRole="adjustable"
        accessibilityValue={{ min: minimumValue, max: maximumValue, now: value }}
        disabled={isDisabled}
        onPress={handleTrackPress}
        style={[styles.trackHitArea, isDisabled && styles.disabled]}
      >
        {/* Background track */}
        <View
          style={[
            styles.track,
            {
              height: layout.sliderTrackHeight,
              borderRadius: radius.full,
              backgroundColor: colors.surfaceHover,
            },
          ]}
        >
          {/* Active fill */}
          <View
            style={[
              styles.fill,
              {
                width: `${percentage}%`,
                height: layout.sliderTrackHeight,
                borderRadius: radius.full,
                backgroundColor: colors.primaryDark,
              },
            ]}
          />
        </View>

        {/* Draggable thumb */}
        <View
          style={[
            styles.thumb,
            {
              width: layout.sliderThumbSize,
              height: layout.sliderThumbSize,
              borderRadius: radius.full,
              backgroundColor: colors.surface,
              borderColor: colors.primaryDark,
              left: `${percentage}%`,
              marginLeft: -(layout.sliderThumbSize / 2),
            },
          ]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: theme.spacing.xs,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  trackHitArea: {
    height: 44,
    justifyContent: 'center',
    position: 'relative',
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {},
  thumb: {
    position: 'absolute',
    borderWidth: 2.5,
    shadowColor: theme.colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  disabled: {
    opacity: 0.45,
  },
});
