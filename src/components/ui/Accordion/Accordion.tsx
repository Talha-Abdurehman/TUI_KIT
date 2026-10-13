/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Production-grade Accordion collapsible primitive.
 * Smooth expandable sections with rotation chevron and token containment.
 */

import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme, useTheme } from '@/theme';
import { Text } from '../Text';
import { AccordionItem, AccordionProps } from './Accordion.types';

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  style,
  testID,
}) => {
  const { colors, radius } = useTheme();
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <View testID={testID} style={[styles.container, style]}>
      {items.map((item, index) => {
        const isExpanded = expandedIds.includes(item.id);
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <View
            key={item.id}
            style={[
              styles.item,
              {
                backgroundColor: colors.surface,
                borderColor: colors.borderSubtle,
                borderTopLeftRadius: isFirst ? radius.lg : 0,
                borderTopRightRadius: isFirst ? radius.lg : 0,
                borderBottomLeftRadius: isLast && !isExpanded ? radius.lg : 0,
                borderBottomRightRadius: isLast && !isExpanded ? radius.lg : 0,
              },
            ]}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded: isExpanded }}
              onPress={() => toggleItem(item.id)}
              style={({ pressed }) => [
                styles.header,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.headerLeft}>
                {item.icon ? <View style={styles.iconSlot}>{item.icon}</View> : null}
                <View>
                  <Text variant="bodyBold" color="textPrimary">
                    {item.title}
                  </Text>
                  {item.subtitle ? (
                    <Text variant="caption" color="textSecondary" style={styles.subtitle}>
                      {item.subtitle}
                    </Text>
                  ) : null}
                </View>
              </View>

              <Text
                variant="bodySmMedium"
                color="textMuted"
                style={[
                  styles.chevron,
                  {
                    transform: [{ rotate: isExpanded ? '180deg' : '0deg' }],
                  },
                ]}
              >
                ▼
              </Text>
            </Pressable>

            {isExpanded ? (
              <View
                style={[
                  styles.body,
                  {
                    borderTopColor: colors.borderSubtle,
                    backgroundColor: colors.surfaceSubtle,
                    borderBottomLeftRadius: isLast ? radius.lg : 0,
                    borderBottomRightRadius: isLast ? radius.lg : 0,
                  },
                ]}
              >
                {typeof item.content === 'string' ? (
                  <Text variant="body" color="textSecondary">
                    {item.content}
                  </Text>
                ) : (
                  item.content
                )}
              </View>
            ) : null}
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
  item: {
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: -1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconSlot: {
    marginRight: theme.spacing.ms,
  },
  subtitle: {
    marginTop: theme.spacing.xxs,
  },
  chevron: {
    fontSize: 10,
    marginLeft: theme.spacing.sm,
  },
  body: {
    borderTopWidth: 1,
    padding: theme.spacing.md,
  },
  pressed: {
    opacity: 0.8,
  },
});
