/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Slider component types.
 */

import { ViewStyle } from 'react-native';

export interface SliderProps {
  /** Value percentage between 0 and 100 */
  value: number;
  /** Callback fired when user selects or drags to a new percentage */
  onValueChange: (newValue: number) => void;
  /** Minimum slider value (default 0) */
  minimumValue?: number;
  /** Maximum slider value (default 100) */
  maximumValue?: number;
  /** Step increment */
  step?: number;
  /** Optional label text above the track */
  label?: string;
  /** Formatted current value display string (e.g. "£750") */
  valueText?: string;
  /** Disabled state */
  isDisabled?: boolean;
  /** Custom container style */
  style?: ViewStyle;
  /** Test identifier */
  testID?: string;
}
