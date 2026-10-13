/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Timeline step-tracker component.
 * Uses theme layout tokens for dot sizes, line widths, and status colors.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { TimelineProps, TimelineStepStatus } from './Timeline.types';

export const Timeline: React.FC<TimelineProps> = ({
  steps,
  style,
  testID,
}) => {
  const { colors, layout, radius } = useTheme();

  const getDotStyle = (status: TimelineStepStatus) => {
    switch (status) {
      case 'completed':
        return {
          backgroundColor: colors.primaryDark,
          borderColor: colors.primaryDark,
        };
      case 'active':
        return {
          backgroundColor: colors.primary,
          borderColor: colors.primaryDark,
        };
      case 'pending':
      default:
        return {
          backgroundColor: colors.surfaceHover,
          borderColor: colors.borderSubtle,
        };
    }
  };

  const getLineColor = (status: TimelineStepStatus) => {
    return status === 'completed' ? colors.primaryDark : colors.borderSubtle;
  };

  return (
    <View testID={testID} style={[styles.container, style]}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const dotStyles = getDotStyle(step.status);

        return (
          <View key={step.id} style={styles.stepContainer}>
            {/* Left Column: Dot & Connector Line */}
            <View style={styles.indicatorCol}>
              <View
                style={[
                  styles.dot,
                  {
                    width: layout.stepDotSize,
                    height: layout.stepDotSize,
                    borderRadius: radius.full,
                    backgroundColor: dotStyles.backgroundColor,
                    borderColor: dotStyles.borderColor,
                  },
                ]}
              >
                {step.icon ? step.icon : null}
              </View>

              {!isLast ? (
                <View
                  style={[
                    styles.line,
                    {
                      width: layout.stepLineWidth,
                      backgroundColor: getLineColor(step.status),
                    },
                  ]}
                />
              ) : null}
            </View>

            {/* Right Column: Step Content */}
            <View style={[styles.contentCol, !isLast && styles.contentColSpacing]}>
              <View style={styles.titleRow}>
                <Text
                  variant="bodySmMedium"
                  color={step.status === 'pending' ? 'textMuted' : 'textPrimary'}
                >
                  {step.title}
                </Text>
                {step.timestamp ? (
                  <Text variant="caption" color="textMuted">
                    {step.timestamp}
                  </Text>
                ) : null}
              </View>

              {step.description ? (
                <Text variant="caption" color="textSecondary" style={styles.description}>
                  {step.description}
                </Text>
              ) : null}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  stepContainer: {
    flexDirection: 'row',
  },
  indicatorCol: {
    alignItems: 'center',
    marginRight: theme.spacing.ms,
  },
  dot: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    minHeight: theme.spacing.lg,
    marginVertical: theme.spacing.xxs,
  },
  contentCol: {
    flex: 1,
  },
  contentColSpacing: {
    paddingBottom: theme.spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    marginTop: theme.spacing.xxs,
  },
});
