/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Root Navigation Layout
 */

import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '@/theme';

export default function RootLayout() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaProvider>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.surface,
          },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: {
            fontWeight: '600',
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cards"
          options={{
            title: 'Cards',
          }}
        />
        <Stack.Screen
          name="recipients"
          options={{
            title: 'Recipients',
          }}
        />
        <Stack.Screen
          name="payments"
          options={{
            title: 'Send Money',
          }}
        />
        <Stack.Screen
          name="showcase/button"
          options={{
            title: 'Button Showcase',
          }}
        />
        <Stack.Screen
          name="showcase/typography"
          options={{
            title: 'Typography Showcase',
          }}
        />
        <Stack.Screen
          name="showcase/card"
          options={{
            title: 'Card Showcase',
          }}
        />
        <Stack.Screen
          name="showcase/badge"
          options={{
            title: 'Badge Showcase',
          }}
        />
        <Stack.Screen
          name="showcase/input"
          options={{
            title: 'Input Showcase',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
