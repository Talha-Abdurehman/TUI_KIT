---
trigger: model_decision
description: UI Component Engineering Guidelines for token contract, component API, touch targets, and performance
---
<!-- 
Author: Talha Abdurehman <talhakyle124@gmail.com>
-->
# UI Component Engineering Guidelines

## 1. Token Contract & Fintech Visual Identity
All styles must resolve tokens through the active theme contract (`@/theme`). Zero arbitrary values allowed:
- Colors:
  - Primary Brand CTA: `theme.colors.primary` (Wise Electric Lime `#9FE870`) paired with `theme.colors.primaryForeground` (Dark Forest Green `#163300`).
  - Secondary & Structure: `theme.colors.secondary` (`#163300`), `theme.colors.surfaceSubtle` (`#E8EBE6`).
  - Canvas & Surfaces: `theme.colors.background` (`#F4F5F2` sage off-white in light / `#0E0F0C` in dark), `theme.colors.surface` (`#FFFFFF` in light / `#1A1D17` in dark).
  - Ink Typography: `theme.colors.textPrimary` (`#0E0F0C` in light / `#F4F5F2` in dark), `theme.colors.textSecondary`, `theme.colors.textMuted`.
  - Borders & Status: `theme.colors.border`, `theme.colors.success`, `theme.colors.warning`, `theme.colors.error`.
- Radii Scale:
  - Buttons & Chips: Always use `theme.radius.full` (9999pt) for signature fintech pill geometry.
  - Cards & Sliders: Use `theme.radius.xl` (24pt) or `theme.radius.lg` (16pt).
  - Inputs & Small elements: Use `theme.radius.md` (12pt).
- Spacing Scale: `theme.spacing.xxs` (2), `xs` (4), `sm` (8), `md` (16), `lg` (24), `xl` (32), `xxl` (48).
- Typography Presets:
  - Numbers & Headlines: `theme.typography.presets.hero` (40pt/w900), `display` (32pt/w800), `titleLg` (24pt/w800).
  - Content: `titleMd`, `titleSm`, `bodyBold`, `bodyMedium`, `body`, `bodySm`, `captionMedium`, `caption`.
- Dimensions & Layout: Always reference `theme.layout` (`buttonHeightMd`, `actionCircleSize`, `currencyCardWidth`, `debitCardAspectRatio`, `bottomNavHeight`, etc.).

## 2. Component API Standards
- Export each component as a named export from its directory, plus a barrel export in `src/components/index.ts`.
- Standardized boolean prop names: `isDisabled`, `isLoading`, `isFullWidth`.
- Standardized variant prop names: `variant` (`"primary" | "secondary" | "outline" | "ghost" | "danger"`), `size` (`"sm" | "md" | "lg"`).
- Always extend the native props interface (e.g. `PressableProps`, `TextInputProps`) using `Omit` for overridden properties.
- Always include `testID` prop forwarding for automated testing.

## 3. Interaction & Touch Targets
- Interactive elements must use `Pressable` (not `TouchableOpacity`).
- Small icons or buttons with visual sizes under 44×44 must set `hitSlop={theme.hitSlop}` to guarantee a 44×44 pt hit area.
- Buttons and cards must visually react to user touch via `({ pressed }) => [...]` style arrays with slight scale down (`transform: [{ scale: 0.98 }]`) or opacity.

## 4. Performance & Hermes 60-120 FPS Invariants
- `useTheme()` returns referentially stable singleton objects (`lightTheme` / `darkTheme`). Never allocate new theme objects inside render functions.
- Static tokens (`spacing`, `radius`, `layout`, `typography.presets`) can and should be read inside top-level `StyleSheet.create` via `import { theme } from '@/theme'`.
- Dynamic color styles must compose StyleSheet IDs with single-property objects: `style={[styles.base, { backgroundColor: colors.surface }]}`.
- FlatList / FlashList must always define `keyExtractor` using unique entity IDs, never array indices.
