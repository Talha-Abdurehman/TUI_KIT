/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Central Theme Contract & Active Theme Hook
 *
 * Performance-optimized: Returns memoized static references (lightTheme / darkTheme)
 * to avoid object reallocation on every render, ensuring stable 60-120 FPS in Hermes.
 */

import { useColorScheme, useWindowDimensions } from 'react-native';
import {
  animation,
  breakpoints,
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
  breakpoints,
  animation,
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
  breakpoints,
  animation,
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
 * Responsive viewport hook.
 * Inspects window dimensions and resolves active device category.
 */
export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < breakpoints.tablet;
  const isTablet = width >= breakpoints.tablet && width < breakpoints.desktop;
  const isDesktop = width >= breakpoints.desktop;
  const isWide = width >= breakpoints.wide;

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isWide,
    breakpoint: isWide ? 'wide' : isDesktop ? 'desktop' : isTablet ? 'tablet' : ('mobile' as const),
  };
}

/**
 * Static theme fallback for top-level StyleSheet.create calculations
 * where React hooks cannot be executed.
 */
export const theme = lightTheme;

export type Theme = typeof lightTheme;
export type {
  AnimationKey,
  BreakpointKey,
  LayoutKey,
  RadiusKey,
  ShadowKey,
  SpacingKey,
  ThemeColors,
  TypographyPresetKey,
} from './tokens';

export {
  animation,
  breakpoints,
  darkColors,
  hitSlop,
  layout,
  lightColors,
  radius,
  shadows,
  spacing,
  typography,
} from './tokens';
