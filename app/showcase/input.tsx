/**
 * Author: Talha Abdurehman <talhakyle124@gmail.com>
 * Input Showcase Screen
 */

import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@/theme';
import { Card, Input, Text } from '@/components';

export default function InputShowcase() {
  const { spacing } = useTheme();
  const [val, setVal] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={[styles.content, { padding: spacing.md }]}>
        <Card variant="flat" style={styles.card}>
          <Text variant="titleSm" style={styles.title}>
            Text Input States
          </Text>
          <Text variant="bodySm" color="textSecondary" style={styles.desc}>
            Token-styled focus borders, helper text, and validation errors.
          </Text>

          <Input
            label="Standard Input"
            placeholder="Enter your name..."
            value={val}
            onChangeText={setVal}
            helperText="This is standard helper text."
          />

          <Input
            label="Input with Error State"
            placeholder="Enter your email..."
            value="invalid-email"
            errorText="Please provide a valid corporate email address."
          />

          <Input
            label="Disabled Input"
            placeholder="Cannot type here..."
            value="Read-only value"
            isDisabled={true}
          />
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
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
});
