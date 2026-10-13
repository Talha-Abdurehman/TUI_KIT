/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * CurrencyCard component types.
 */

import { StyleProp, ViewStyle } from 'react-native';

export interface CurrencyCardProps {
  /**
   * Currency ISO code (e.g., 'GBP', 'USD', 'EUR').
   */
  currencyCode: string;

  /**
   * Display name of currency (e.g., 'British Pound').
   */
  currencyName: string;

  /**
   * Formatted balance amount string (e.g., '£4,250.80').
   */
  amount: string;

  /**
   * Flag emoji or character icon (e.g., '🇬🇧', '🇺🇸', '🇪🇺').
   */
  flagEmoji?: string;

  /**
   * Whether this card is an "+ Add new balance" action card.
   */
  isAddCard?: boolean;

  /**
   * Click handler.
   */
  onPress?: () => void;

  /**
   * Style override.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Identifier for automated testing.
   */
  testID?: string;
}
