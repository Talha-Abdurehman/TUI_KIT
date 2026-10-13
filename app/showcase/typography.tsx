/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Typography Showcase Screen
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Card, Text } from '@/components';

export default function TypographyShowcase() {
  const { spacing } = useTheme();

  const presets = [
    { name: 'Display', variant: 'display' as const, sample: 'The Quick Brown Fox' },
    { name: 'Title Large', variant: 'titleLg' as const, sample: 'Modern Mobile UI System' },
    { name: 'Title Medium', variant: 'titleMd' as const, sample: 'Consistent Design Token Scale' },
    { name: 'Title Small', variant: 'titleSm' as const, sample: 'Accessible Typography Presets' },
    { name: 'Body Bold', variant: 'bodyBold' as const, sample: 'High contrast emphasized body text' },
    { name: 'Body Medium', variant: 'bodyMedium' as const, sample: 'Standard semi-emphasized readability' },
    { name: 'Body Regular', variant: 'body' as const, sample: 'Standard body reading paragraph for clean apps' },
    { name: 'Body Small', variant: 'bodySm' as const, sample: 'Secondary descriptions and helper labels' },
    { name: 'Caption', variant: 'caption' as const, sample: 'Microcopy, timestamps, and compact tags' },
  ];

  return (
    <ScrollView contentContainerStyle={[styles.content, { padding: spacing.md }]}>
      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm" style={styles.title}>
          Typography Presets
        </Text>
        <Text variant="bodySm" color="textSecondary" style={styles.desc}>
          Pre-calculated line heights and weights for seamless vertical rhythm.
        </Text>

        <View style={styles.list}>
          {presets.map((p) => (
            <View key={p.name} style={styles.item}>
              <Text variant="captionMedium" color="textMuted">
                {p.name} ({p.variant})
              </Text>
              <Text variant={p.variant}>{p.sample}</Text>
            </View>
          ))}
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
  list: {
    gap: 16,
  },
  item: {
    gap: 4,
  },
});
