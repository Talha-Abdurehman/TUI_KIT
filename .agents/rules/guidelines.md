---
trigger: model_decision
description: UI Component Engineering Guidelines for token contract, component API, touch targets, responsive architecture, and performance
---
<!-- 
Author: Talha Abdurehman <talhakyle124@gmail.com>
-->
# UI Component Engineering Guidelines

## 0. Token-First Invariant (MANDATORY WORKFLOW)
Whenever you want to make ANY change in the UI (new component, modified style, new dimension, altered spacing, new color tint, breakpoint, or layout constraint), it MUST be declared in `src/theme/tokens.ts` (and exported through `@/theme`) FIRST.
- Never write or modify a component or screen with new arbitrary values before the token is established.
- The token file is the single source of truth, and all UI code strictly derives from it.

## 1. Token Contract & Fintech Visual Identity
All styles must resolve tokens through the active theme contract (`@/theme`). Zero arbitrary values allowed:
- Colors:
  - Primary Brand CTA: `theme.colors.primary` (Wise Electric Lime `#9FE870`) paired with `theme.colors.primaryForeground` (Dark Forest Green `#163300`).
  - Secondary & Structure: `theme.colors.secondary` (`#163300`), `theme.colors.surfaceSubtle` (`#E8EBE6`), `theme.colors.brandLime`, `theme.colors.brandForest`.
  - Canvas & Surfaces: `theme.colors.background` (`#F4F5F2` sage off-white in light / `#0E0F0C` in dark), `theme.colors.surface` (`#FFFFFF` in light / `#1A1D17` in dark).
  - Ink Typography: `theme.colors.textPrimary` (`#0E0F0C` in light / `#F4F5F2` in dark), `theme.colors.textSecondary`, `theme.colors.textMuted`, `theme.colors.textInverse`.
  - Borders & Status: `theme.colors.border`, `theme.colors.borderSubtle`, `theme.colors.borderFocus`, `theme.colors.success`, `theme.colors.warning`, `theme.colors.error`, `theme.colors.info`.
  - Overlays: `theme.colors.cardFrozenOverlay`, `theme.colors.overlay`, `theme.colors.focusRing`.
- Radii Scale:
  - Buttons & Chips: Always use `theme.radius.full` (9999pt) for signature fintech pill geometry.
  - Cards & Sliders: Use `theme.radius.xl` (24pt) or `theme.radius.lg` (16pt).
  - Inputs & Medium Containers: Use `theme.radius.md` (12pt).
  - Small Elements & Chips: Use `theme.radius.sm` (8pt) or `theme.radius.xs` (4pt).
- Spacing Scale:
  - Complete 11-step scale: `none` (0), `xxs` (2), `xs` (4), `sm` (8), `ms` (12), `md` (16), `ml` (20), `lg` (24), `xl` (32), `xxl` (48), `xxxl` (64).
- Typography Presets (12 presets):
  - Numbers & Headlines: `theme.typography.presets.hero` (40pt/w900), `display` (32pt/w800), `titleLg` (24pt/w800), `titleMd` (20pt/w700), `titleSm` (18pt/w600).
  - Content: `bodyBold` (16pt/w700), `bodyMedium` (16pt/w500), `body` (16pt/w400), `bodySmMedium` (14pt/w600), `bodySm` (14pt/w400), `captionMedium` (12pt/w600), `caption` (12pt/w400).
- Standard Layout Dimensions:
  - Button heights: `buttonHeightSm` (36), `buttonHeightMd` (44), `buttonHeightLg` (52).
  - Action Circle: `actionCircleSize` (52), `actionCircleContainerWidth` (72).
  - Circles & Avatars: `flagCircleSize` (38), `avatarSm` (32), `avatarMd` (38), `avatarLg` (44).
  - Balance Cards: `currencyCardWidth` (156), `currencyCardHeight` (160).
  - Debit Card Visual: `debitCardAspectRatio` (1.586), `emvChipWidth` (36), `emvChipHeight` (28), `mastercardLogoWidth` (38), `mastercardLogoHeight` (24), `mcCircleSize` (22), `mcCircleOverlap` (-10).
  - Inputs & Bars: `inputMinHeight` (44), `bottomNavHeight` (70), `headerHeight` (56).
  - Progress & Timelines: `stepDotSize` (12), `stepLineWidth` (2), `progressBarHeight` (8).
  - Responsive & Workbenches: `maxContentWidth` (1280), `sidebarWidth` (260), `phonePreviewWidth` (393), `phonePreviewHeight` (852), `typeSpecimenMinWidth` (200).
- Responsive Breakpoints:
  - `theme.breakpoints.mobile` (0), `tablet` (768), `desktop` (1024), `wide` (1280).

## 2. Component API Standards
- Export each component as a named export from its directory, plus a barrel export in `src/components/index.ts`.
- Standardized boolean prop names: `isDisabled`, `isLoading`, `isFullWidth`.
- Standardized variant prop names: `variant` (`"primary" | "secondary" | "outline" | "ghost" | "danger"`), `size` (`"sm" | "md" | "lg"`).
- Always extend the native props interface (e.g. `PressableProps`, `TextInputProps`) using `Omit` for overridden properties.
- Always include `testID` prop forwarding for automated testing.

## 3. Responsive Workbench Standards (Desktop & Mobile)
- Use `useResponsive()` from `@/theme` to inspect viewport dimensions and device category (`isDesktop`, `isTablet`, `isMobile`, `breakpoint`).
- Desktop mode (`width >= 1024`): Render a wide workbench with sticky sidebar (`sidebarWidth`), multi-column responsive grid, and metrics banners.
- Mobile mode (`width < 1024`): Render a touch-first single-column layout centered at `phonePreviewWidth` (393pt).
- Offer an interactive Viewport Mode Switcher (`Desktop`, `Mobile`, `Auto`) so desktop developers can test mobile device viewports immediately.

## 4. Interaction & Touch Targets
- Interactive elements must use `Pressable` (never `TouchableOpacity`).
- Small icons or buttons with visual sizes under 44×44 must set `hitSlop={theme.hitSlop}` to guarantee a 44×44 pt touch target.
- Buttons and cards must visually react to user touch via `({ pressed }) => [...]` style arrays with slight scale down (`transform: [{ scale: 0.98 }]`) or opacity.

## 5. Performance & Hermes 60-120 FPS Invariants
- `useTheme()` returns referentially stable singleton objects (`lightTheme` / `darkTheme`). Never allocate new theme objects inside render functions.
- Static tokens (`spacing`, `radius`, `layout`, `breakpoints`, `typography.presets`) can and should be read inside top-level `StyleSheet.create` via `import { theme } from '@/theme'`.
- Dynamic color styles must compose StyleSheet IDs with single-property objects: `style={[styles.base, { backgroundColor: colors.surface }]}`.
- FlatList / FlashList must always define `keyExtractor` using unique entity IDs, never array indices.
