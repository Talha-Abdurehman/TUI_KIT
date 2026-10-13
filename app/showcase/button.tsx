/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Button Primitive Showcase Screen
 */

import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@/theme';
import { Badge, Button, Card, Text } from '@/components';

export default function ButtonShowcase() {
  const { spacing } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScrollView contentContainerStyle={[styles.content, { padding: spacing.md }]}>
      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm" style={styles.title}>
          Button Variants
        </Text>
        <Text variant="bodySm" color="textSecondary" style={styles.desc}>
          Visual styles mapped directly to theme tokens.
        </Text>

        <View style={styles.row}>
          <Button label="Primary Button" variant="primary" style={styles.btn} />
          <Button label="Secondary Button" variant="secondary" style={styles.btn} />
          <Button label="Outline Button" variant="outline" style={styles.btn} />
          <Button label="Ghost Button" variant="ghost" style={styles.btn} />
          <Button label="Danger Button" variant="danger" style={styles.btn} />
        </View>
      </Card>

      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm" style={styles.title}>
          Button Sizes
        </Text>
        <Text variant="bodySm" color="textSecondary" style={styles.desc}>
          Standardized heights and touch-target padding (sm, md, lg).
        </Text>

        <View style={styles.row}>
          <Button label="Small (36pt)" size="sm" variant="primary" style={styles.btn} />
          <Button label="Medium (44pt)" size="md" variant="primary" style={styles.btn} />
          <Button label="Large (52pt)" size="lg" variant="primary" style={styles.btn} />
        </View>
      </Card>

      <Card variant="flat" style={styles.card}>
        <Text variant="titleSm" style={styles.title}>
          Interactive States
        </Text>
        <Text variant="bodySm" color="textSecondary" style={styles.desc}>
          Pressed feedback, loading spinner, and disabled states.
        </Text>

        <View style={styles.row}>
          <Button
            label={isLoading ? 'Loading...' : 'Toggle Loading State'}
            variant="outline"
            isLoading={isLoading}
            onPress={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000);
            }}
            style={styles.btn}
          />
          <Button
            label="Disabled State"
            variant="primary"
            isDisabled={true}
            style={styles.btn}
          />
          <Button
            label="Full Width Button"
            variant="primary"
            isFullWidth={true}
            style={styles.btn}
          />
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
  row: {
    gap: 12,
  },
  btn: {
    marginBottom: 4,
  },
});
