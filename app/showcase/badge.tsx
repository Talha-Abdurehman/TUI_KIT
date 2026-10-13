/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Badge Showcase Screen
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Badge, Card, Text } from '@/components';

export default function BadgeShowcase() {
  const { spacing } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.content, { padding: spacing.md }]}>
      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm" style={styles.title}>
          Semantic Status Badges
        </Text>
        <Text variant="bodySm" color="textSecondary" style={styles.desc}>
          Standardized indicators with matched foreground and subtle backgrounds.
        </Text>

        <View style={styles.badgeRow}>
          <Badge label="Primary" variant="primary" />
          <Badge label="Secondary" variant="secondary" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
          <Badge label="Error" variant="error" />
          <Badge label="Info" variant="info" />
          <Badge label="Outline" variant="outline" />
        </View>
      </Card>

      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm" style={styles.title}>
          Badge Sizes
        </Text>
        <Text variant="bodySm" color="textSecondary" style={styles.desc}>
          Compact tags for list items vs standard status indicators.
        </Text>

        <View style={styles.badgeRow}>
          <Badge label="Small Badge" size="sm" variant="primary" />
          <Badge label="Medium Badge" size="md" variant="primary" />
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 4,
  },
  desc: {
    marginBottom: 16,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
