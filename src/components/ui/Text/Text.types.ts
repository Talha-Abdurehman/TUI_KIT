/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Text component contract and types.
 */

import { TextProps as NativeTextProps, TextStyle } from 'react-native';
import { ThemeColors, TypographyPresetKey } from '@/theme';

export interface TextProps extends NativeTextProps {
  /**
   * Typography variant preset referencing design system tokens.
   * @default 'body'
   */
  variant?: TypographyPresetKey;

  /**
   * Color token key resolving from the active theme.
   * @default 'textPrimary'
   */
  color?: keyof ThemeColors;

  /**
   * Text alignment.
   */
  align?: TextStyle['textAlign'];

  /**
   * Identifier for automated testing.
   */
  testID?: string;
}
