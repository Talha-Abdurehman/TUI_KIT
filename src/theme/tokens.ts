/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Single source of truth for all corporate UI design tokens.
 * Deconstructed from Wise Design System (fintech bold, borderless, high-clarity).
 * Strictly typed, zero arbitrary values, optimized for Hermes and 60-120 FPS.
 */

import { TextStyle, ViewStyle } from 'react-native';

export interface ThemeColors {
  // Brand & Action (Wise Electric Lime & Forest Green)
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryForeground: string;

  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryForeground: string;

  // Specific Fintech Brand Identity
  brandLime: string;
  brandForest: string;
  cardFrozenOverlay: string;

  // Background & Elevation Surfaces (Warm Sage / Ink)
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
  // Brand: Signature Wise Electric Lime & Dark Fir / Forest Green
  primary: '#9FE870',
  primaryLight: '#B7F28F',
  primaryDark: '#163300',
  primaryForeground: '#163300',

  secondary: '#163300',
  secondaryLight: '#2E590A',
  secondaryDark: '#0D1F00',
  secondaryForeground: '#FFFFFF',

  // Fintech Brand Tokens
  brandLime: '#9FE870',
  brandForest: '#163300',
  cardFrozenOverlay: 'rgba(255, 255, 255, 0.35)',

  // Background: Warm Sage Off-white Canvas & Pure White Surfaces
  background: '#F4F5F2',
  surface: '#FFFFFF',
  surfaceSubtle: '#E8EBE6',
  surfaceHover: '#DFE3DD',
  surfaceActive: '#D3D8D0',

  // Typography: High-contrast Ink
  textPrimary: '#0E0F0C',
  textSecondary: '#4A5043',
  textMuted: '#7D8475',
  textInverse: '#FFFFFF',

  // Borders & Dividers
  border: '#E2E5DF',
  borderSubtle: '#ECF0EA',
  borderFocus: '#163300',

  // Status & Feedback
  success: '#2E7D32',
  successForeground: '#FFFFFF',
  successSubtle: '#E8F5E9',

  warning: '#E65100',
  warningForeground: '#FFFFFF',
  warningSubtle: '#FFF3E0',

  error: '#D32F2F',
  errorForeground: '#FFFFFF',
  errorSubtle: '#FFEBEE',

  info: '#0288D1',
  infoForeground: '#FFFFFF',
  infoSubtle: '#E1F5FE',

  // Interactive States & Special
  disabled: '#E8EBE6',
  disabledForeground: '#9CA396',
  overlay: 'rgba(14, 15, 12, 0.65)',
  focusRing: 'rgba(159, 232, 112, 0.45)',
  transparent: 'transparent',
};

export const darkColors: ThemeColors = {
  // Brand: Signature Wise Electric Lime
  primary: '#9FE870',
  primaryLight: '#B7F28F',
  primaryDark: '#163300',
  primaryForeground: '#0E0F0C',

  secondary: '#E8EBE6',
  secondaryLight: '#FFFFFF',
  secondaryDark: '#B8BEB2',
  secondaryForeground: '#0E0F0C',

  // Fintech Brand Tokens
  brandLime: '#9FE870',
  brandForest: '#163300',
  cardFrozenOverlay: 'rgba(255, 255, 255, 0.15)',

  // Background: Deep Charcoal / Ink Canvas
  background: '#0E0F0C',
  surface: '#1A1D17',
  surfaceSubtle: '#252921',
  surfaceHover: '#31362D',
  surfaceActive: '#3F463A',

  // Typography: Sage Tinted Light
  textPrimary: '#F4F5F2',
  textSecondary: '#9CA396',
  textMuted: '#6D7566',
  textInverse: '#0E0F0C',

  // Borders & Dividers
  border: '#2E332A',
  borderSubtle: '#22261F',
  borderFocus: '#9FE870',

  // Status & Feedback
  success: '#81C784',
  successForeground: '#0E0F0C',
  successSubtle: '#1B381E',

  warning: '#FFB74D',
  warningForeground: '#0E0F0C',
  warningSubtle: '#3E2405',

  error: '#E57373',
  errorForeground: '#0E0F0C',
  errorSubtle: '#3B1414',

  info: '#4FC3F7',
  infoForeground: '#0E0F0C',
  infoSubtle: '#0F2C3B',

  // Interactive States & Special
  disabled: '#252921',
  disabledForeground: '#6D7566',
  overlay: 'rgba(0, 0, 0, 0.85)',
  focusRing: 'rgba(159, 232, 112, 0.45)',
  transparent: 'transparent',
};

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  ms: 12,
  md: 16,
  ml: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const radius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
} as const;

export const typography = {
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    display: 32,
    hero: 40,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 30,
    xxl: 34,
    display: 40,
    hero: 48,
  },
  weight: {
    regular: '400' as TextStyle['fontWeight'],
    medium: '500' as TextStyle['fontWeight'],
    semibold: '600' as TextStyle['fontWeight'],
    bold: '700' as TextStyle['fontWeight'],
    heavy: '900' as TextStyle['fontWeight'],
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
      fontWeight: '600',
    } as TextStyle,
    bodySm: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
    } as TextStyle,
    bodySmMedium: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
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
      fontWeight: '700',
    } as TextStyle,
    titleLg: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '800',
    } as TextStyle,
    display: {
      fontSize: 32,
      lineHeight: 38,
      fontWeight: '800',
    } as TextStyle,
    hero: {
      fontSize: 40,
      lineHeight: 46,
      fontWeight: '900',
    } as TextStyle,
  },
} as const;

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  } as ViewStyle,
  sm: {
    shadowColor: '#0E0F0C',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  } as ViewStyle,
  md: {
    shadowColor: '#0E0F0C',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  } as ViewStyle,
  lg: {
    shadowColor: '#0E0F0C',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 6,
  } as ViewStyle,
} as const;

/**
 * Standard Component Dimensions & Aspect Ratios
 */
export const layout = {
  // Button heights
  buttonHeightSm: 36,
  buttonHeightMd: 44,
  buttonHeightLg: 52,
  // Action circle
  actionCircleSize: 52,
  actionCircleContainerWidth: 72,
  // Flag / avatar circles
  flagCircleSize: 38,
  avatarSm: 32,
  avatarMd: 38,
  avatarLg: 44,
  // Currency card
  currencyCardWidth: 156,
  currencyCardHeight: 160,
  // Debit card
  debitCardAspectRatio: 1.586,
  emvChipWidth: 36,
  emvChipHeight: 28,
  mastercardLogoWidth: 38,
  mastercardLogoHeight: 24,
  mcCircleSize: 22,
  mcCircleOverlap: -10,
  // Input
  inputMinHeight: 44,
  // Navigation
  bottomNavHeight: 70,
  headerHeight: 56,
  // Timeline / progress
  stepDotSize: 12,
  stepLineWidth: 2,
  progressBarHeight: 8,
  // Responsive Layout & Viewports
  maxContentWidth: 1280,
  sidebarWidth: 260,
  phonePreviewWidth: 393,
  phonePreviewHeight: 852,
  typeSpecimenMinWidth: 200,
} as const;

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

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
export type LayoutKey = keyof typeof layout;
export type BreakpointKey = keyof typeof breakpoints;
