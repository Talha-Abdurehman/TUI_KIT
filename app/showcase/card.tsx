/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Card Showcase Screen
 */

import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Badge, Card, Text } from '@/components';

export default function CardShowcase() {
  const { spacing } = useTheme();
  const [pressCount, setPressCount] = useState(0);

  return (
    <ScrollView contentContainerStyle={[styles.content, { padding: spacing.md }]}>
      <Text variant="titleSm" style={styles.sectionTitle}>
        Card Variants
      </Text>

      {/* Outlined Card */}
      <Card variant="outlined" style={styles.card}>
        <Text variant="titleSm">Outlined Card</Text>
        <Text variant="bodySm" color="textSecondary" style={styles.cardBody}>
          Standard clean surface with subtle border token.
        </Text>
        <Badge label="Default Variant" variant="secondary" size="sm" />
      </Card>

      {/* Elevated Card */}
      <Card variant="elevated" style={styles.card}>
        <Text variant="titleSm">Elevated Card</Text>
        <Text variant="bodySm" color="textSecondary" style={styles.cardBody}>
          Utilizes cross-platform shadow tokens (iOS shadow + Android elevation).
        </Text>
        <Badge label="Elevated Variant" variant="primary" size="sm" />
      </Card>

      {/* Flat Card */}
      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm">Flat Subtle Card</Text>
        <Text variant="bodySm" color="textSecondary" style={styles.cardBody}>
          Light background fill with zero borders or shadows.
        </Text>
        <Badge label="Flat Variant" variant="info" size="sm" />
      </Card>

      {/* Interactive Card */}
      <Text variant="titleSm" style={styles.sectionTitle}>
        Interactive Card
      </Text>
      <Card
        variant="outlined"
        style={styles.card}
        onPress={() => setPressCount((c) => c + 1)}
      >
        <Text variant="titleSm">Pressable Card (Tap Me)</Text>
        <Text variant="bodySm" color="textSecondary" style={styles.cardBody}>
          Includes active touch feedback and press scaling. Tapped {pressCount} times.
        </Text>
        <Badge label="Tap count: " variant="success" size="sm">
          <Text variant="captionMedium" color="success">
            Tapped: {pressCount}
          </Text>
        </Badge>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 16,
  },
  cardBody: {
    marginVertical: 8,
  },
});
