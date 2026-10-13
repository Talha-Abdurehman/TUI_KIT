/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Central Theme Contract & Active Theme Hook
 *
 * Performance-optimized: Returns memoized static references (lightTheme / darkTheme)
 * to avoid object reallocation on every render, ensuring stable 60-120 FPS in Hermes.
 */

import { useColorScheme } from 'react-native';
import {
  darkColors,
  hitSlop,
  layout,
  lightColors,
  radius,
  shadows,
  spacing,
  typography,
} from './tokens';

/**
 * Pre-assembled immutable theme objects.
 * Kept as static references so components receive referentially-stable objects.
 */
export const lightTheme = {
  isDark: false as const,
  colors: lightColors,
  spacing,
  radius,
  typography,
  shadows,
  layout,
  hitSlop,
};

export const darkTheme = {
  isDark: true as const,
  colors: darkColors,
  spacing,
  radius,
  typography,
  shadows,
  layout,
  hitSlop,
};

/**
 * Primary theme hook.
 * Automatically synchronizes with iOS / Android system color scheme.
 */
export function useTheme() {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
}

/**
 * Static theme fallback for top-level StyleSheet.create calculations
 * where React hooks cannot be executed.
 */
export const theme = lightTheme;

export type Theme = typeof lightTheme;
export type {
  LayoutKey,
  RadiusKey,
  ShadowKey,
  SpacingKey,
  ThemeColors,
  TypographyPresetKey,
} from './tokens';

export {
  darkColors,
  hitSlop,
  layout,
  lightColors,
  radius,
  shadows,
  spacing,
  typography,
} from './tokens';
