/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Template Showcase Home Screen
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme';
import { Badge, Button, Card, Text } from '@/components';

export default function HomeScreen() {
  const router = useRouter();
  const { colors, spacing, isDark } = useTheme();

  const components = [
    {
      title: 'Button',
      description: 'Primary, secondary, outline, ghost, sizes & loading states',
      route: '/showcase/button',
      badge: 'Interactive',
    },
    {
      title: 'Typography',
      description: 'Strict token presets from Caption to Display',
      route: '/showcase/typography',
      badge: 'Design Token',
    },
    {
      title: 'Card',
      description: 'Elevated, outlined, and flat layout containers',
      route: '/showcase/card',
      badge: 'Layout',
    },
    {
      title: 'Badge',
      description: 'Status badges and semantic indicator pills',
      route: '/showcase/badge',
      badge: 'Feedback',
    },
    {
      title: 'Input',
      description: 'Accessible text inputs with focus and validation states',
      route: '/showcase/input',
      badge: 'Form',
    },
  ];

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { padding: spacing.md },
        ]}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <Badge
            label={isDark ? 'Dark Mode Active' : 'Light Mode Active'}
            variant="primary"
            style={styles.heroBadge}
          />
          <Text variant="display" style={styles.title}>
            Corporate UI Kit
          </Text>
          <Text variant="body" color="textSecondary" style={styles.subtitle}>
            Production-grade, token-driven, zero-bloat React Native template optimized for Expo and strict TypeScript.
          </Text>
        </View>

        {/* Component Catalog */}
        <Text variant="titleSm" style={styles.sectionHeader}>
          Component Library
        </Text>

        {components.map((item) => (
          <Card
            key={item.title}
            variant="outlined"
            style={styles.card}
            onPress={() => router.push(item.route as any)}
          >
            <View style={styles.cardHeader}>
              <Text variant="titleSm">{item.title}</Text>
              <Badge label={item.badge} variant="secondary" size="sm" />
            </View>
            <Text
              variant="bodySm"
              color="textSecondary"
              style={styles.cardDesc}
            >
              {item.description}
            </Text>
            <Button
              label="View Showcase"
              variant="ghost"
              size="sm"
              style={styles.cardAction}
              onPress={() => router.push(item.route as any)}
            />
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
  },
  hero: {
    marginBottom: 24,
  },
  heroBadge: {
    marginBottom: 8,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    lineHeight: 22,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardDesc: {
    marginBottom: 12,
  },
  cardAction: {
    alignSelf: 'flex-start',
  },
});
