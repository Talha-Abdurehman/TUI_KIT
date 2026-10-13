---
trigger: model_decision
description: UI Component Engineering Guidelines for token contract, component API, touch targets, and performance
---
<!-- 
Author: Talha Abdurehman <talhakyle124@gmail.com>
-->
# UI Component Engineering Guidelines

## 1. Token Contract
All styles must resolve tokens through the active theme:
- Colors: `theme.colors.background`, `theme.colors.surface`, `theme.colors.textPrimary`, `theme.colors.border`, etc.
- Spacing: `theme.spacing.xs` (4), `sm` (8), `md` (16), `lg` (24), `xl` (32).
- Radii: `theme.radius.sm` (4), `md` (8), `lg` (12), `full` (9999).
- Typography: Use token-defined font sizes, line heights, and weights.

## 2. Component API Standards
- Export each component as a named export, plus a barrel export in `src/components/index.ts`.
- Standardized boolean prop names: `isDisabled`, `isLoading`, `isFullWidth`.
- Standardized variant prop names: `variant` (`"primary" | "secondary" | "outline" | "ghost"`), `size` (`"sm" | "md" | "lg"`).
- Always extend the native props interface (e.g. `PressableProps`, `TextInputProps`) using `Omit` for overridden properties.
- Always include `testID` prop forwarding for automated testing.

## 3. Interaction & Touch Targets
- Interactive elements must use `Pressable` (not `TouchableOpacity`).
- Small icons or buttons with visual sizes under 44x44 must set `hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}` to guarantee a 44x44 pt hit area.
- Buttons must visually react to user touch via `({ pressed }) => [...]` style arrays or opacity changes.

## 4. Performance & Layout Rules
- Avoid inline object definitions in JSX props. Use `StyleSheet.create` for all static rules.
- For dynamic styles (like calculated widths or color overrides), compose StyleSheet IDs with single-property arrays: `style={[styles.base, { backgroundColor: dynamicColor }]}`.
- FlatList / FlashList must always define `keyExtractor` using unique entity IDs, never array indices.
