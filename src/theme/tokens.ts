/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Single source of truth for all corporate UI design tokens.
 * Strictly typed, zero arbitrary values, optimized for Hermes and 60-120 FPS.
 */

import { TextStyle, ViewStyle } from 'react-native';

/**
 * Semantic Color Contract
 * Both light and dark palettes must satisfy this interface 1:1.
 */
export interface ThemeColors {
  // Brand & Action
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryForeground: string;

  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryForeground: string;

  // Background & Elevation Surfaces
  background: string;
  surface: string;
  surfaceSubtle: string;
  surfaceHover: string;
  surfaceActive: string;

  // Typography
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;

  // Borders & Dividers
  border: string;
  borderSubtle: string;
  borderFocus: string;

  // Status & Feedback
  success: string;
  successForeground: string;
  successSubtle: string;

  warning: string;
  warningForeground: string;
  warningSubtle: string;

  error: string;
  errorForeground: string;
  errorSubtle: string;

  info: string;
  infoForeground: string;
  infoSubtle: string;

  // Interactive States & Special
  disabled: string;
  disabledForeground: string;
  overlay: string;
  focusRing: string;
  transparent: string;
}

export const lightColors: ThemeColors = {
  // Brand & Action
  primary: '#0284C7',
  primaryLight: '#38BDF8',
  primaryDark: '#0369A1',
  primaryForeground: '#FFFFFF',

  secondary: '#475569',
  secondaryLight: '#64748B',
  secondaryDark: '#334155',
  secondaryForeground: '#FFFFFF',

  // Background & Surfaces
  background: '#FFFFFF',
  surface: '#F8FAFC',
  surfaceSubtle: '#F1F5F9',
  surfaceHover: '#E2E8F0',
  surfaceActive: '#CBD5E1',

  // Typography
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  textInverse: '#FFFFFF',

  // Borders & Dividers
  border: '#E2E8F0',
  borderSubtle: '#F1F5F9',
  borderFocus: '#0284C7',

  // Status & Feedback
  success: '#16A34A',
  successForeground: '#FFFFFF',
  successSubtle: '#DCFCE7',

  warning: '#D97706',
  warningForeground: '#FFFFFF',
  warningSubtle: '#FEF3C7',

  error: '#DC2626',
  errorForeground: '#FFFFFF',
  errorSubtle: '#FEE2E2',

  info: '#2563EB',
  infoForeground: '#FFFFFF',
  infoSubtle: '#DBEAFE',

  // Interactive States & Special
  disabled: '#E2E8F0',
  disabledForeground: '#94A3B8',
  overlay: 'rgba(15, 23, 42, 0.5)',
  focusRing: 'rgba(2, 132, 199, 0.35)',
  transparent: 'transparent',
};

export const darkColors: ThemeColors = {
  // Brand & Action
  primary: '#38BDF8',
  primaryLight: '#7DD3FC',
  primaryDark: '#0284C7',
  primaryForeground: '#090D16',

  secondary: '#94A3B8',
  secondaryLight: '#CBD5E1',
  secondaryDark: '#64748B',
  secondaryForeground: '#090D16',

  // Background & Surfaces
  background: '#090D16',
  surface: '#131B2E',
  surfaceSubtle: '#1E293B',
  surfaceHover: '#2A364F',
  surfaceActive: '#334155',

  // Typography
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  textInverse: '#0F172A',

  // Borders & Dividers
  border: '#1E293B',
  borderSubtle: '#131B2E',
  borderFocus: '#38BDF8',

  // Status & Feedback
  success: '#22C55E',
  successForeground: '#090D16',
  successSubtle: '#052E16',

  warning: '#F59E0B',
  warningForeground: '#090D16',
  warningSubtle: '#451A03',

  error: '#EF4444',
  errorForeground: '#FFFFFF',
  errorSubtle: '#450A0A',

  info: '#60A5FA',
  infoForeground: '#090D16',
  infoSubtle: '#172554',

  // Interactive States & Special
  disabled: '#1E293B',
  disabledForeground: '#64748B',
  overlay: 'rgba(0, 0, 0, 0.75)',
  focusRing: 'rgba(56, 189, 248, 0.35)',
  transparent: 'transparent',
};

/**
 * Spacing Scale (in points)
 * Enforces systematic margins, paddings, and gaps.
 */
export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

/**
 * Border Radii Scale
 */
export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const;

/**
 * Typography Tokens & Pre-composed Style Presets
 */
export const typography = {
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    display: 32,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 30,
    xxl: 34,
    display: 40,
  },
  weight: {
    regular: '400' as TextStyle['fontWeight'],
    medium: '500' as TextStyle['fontWeight'],
    semibold: '600' as TextStyle['fontWeight'],
    bold: '700' as TextStyle['fontWeight'],
  },
  presets: {
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
    } as TextStyle,
    captionMedium: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '500',
    } as TextStyle,
    bodySm: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
    } as TextStyle,
    bodySmMedium: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
    } as TextStyle,
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
    } as TextStyle,
    bodyMedium: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
    } as TextStyle,
    bodyBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '700',
    } as TextStyle,
    titleSm: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
    } as TextStyle,
    titleMd: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600',
    } as TextStyle,
    titleLg: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '700',
    } as TextStyle,
    display: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: '700',
    } as TextStyle,
  },
} as const;

/**
 * Cross-Platform Elevation & Shadow Tokens
 */
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  } as ViewStyle,
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  } as ViewStyle,
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,
} as const;

/**
 * Accessibility Hit Slop Preset
 * Guarantees Apple 44x44 pt minimum touch target for small icons and controls.
 */
export const hitSlop = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
} as const;

export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof radius;
export type TypographyPresetKey = keyof typeof typography.presets;
export type ShadowKey = keyof typeof shadows;
