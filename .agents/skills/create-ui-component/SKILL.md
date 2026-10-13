---
name: create-ui-component
description: Follow these steps sequentially whenever tasked with building or scaffolding a new UI primitive or component for the UI kit.
---
<!-- 
Author: Talha Abdurehman <talhakyle124@gmail.com>
-->
# Skill: Create UI Component Runbook

Follow these steps sequentially whenever tasked with building a new UI primitive or composite component.

## Step 0: Tokens First (MANDATORY INVARIANT)
**Never start writing component code or JSX with hardcoded numbers or hex codes.**
1. Inspect `src/theme/tokens.ts`.
2. If the component introduces any new dimensions, heights, aspect ratios, min-widths, paddings, or semantic colors that do not exist in the tokens:
   - Declare them in `src/theme/tokens.ts` first under `layout`, `spacing`, `radius`, or `colors`.
   - Ensure the token types are exported through `src/theme/index.ts`.
   - Verify that the static `theme` and dynamic `useTheme()` expose the new tokens.

## Step 1: Interface Definition
1. Create `src/components/ui/[ComponentName]/[ComponentName].types.ts`.
2. Define component props interface extending native base props (`ViewProps`, `PressableProps`, etc.).
3. Standardize prop names:
   - Booleans: `isDisabled`, `isLoading`, `isFullWidth`.
   - Variants: `variant`, `size`.
4. Document each custom prop with clear JSDoc comments.
5. Include `testID?: string` prop for automated testing.

## Step 2: Implementation & Token Adherence
1. Create `src/components/ui/[ComponentName]/[ComponentName].tsx`.
2. Import tokens from `@/theme` (`useTheme` for dynamic colors, `theme` for static `StyleSheet.create` rules).
3. Follow the Design System Invariants strictly:
   - **Buttons & Chips**: Must use `radius.full` for signature pill geometry with bold text.
   - **Cards & Sheets**: Must use `radius.xl` or `radius.lg` with `shadows.sm` / `shadows.md`.
   - **Colors**: Never use raw hex codes. Reference `colors.primary`, `colors.primaryForeground`, `colors.surface`, `colors.border`, etc.
   - **Dimensions**: Read from `theme.layout` (`buttonHeightMd`, `actionCircleSize`, etc.).
4. Handle all states explicitly:
   - Default state
   - Pressed state with tactile micro-interaction (`transform: [{ scale: 0.98 }]`)
   - Loading state (render native `ActivityIndicator` styled with matching theme token)
   - Disabled state (dimmed opacity, `disabled={true}`)
5. Touch targets under 44×44 pt must set `hitSlop={theme.hitSlop}`.
6. Keep all static styles inside `StyleSheet.create` at the bottom of the file.

## Step 3: Public API Export
1. Create `src/components/ui/[ComponentName]/index.ts` exporting the component and its types.
2. Re-export the component from `src/components/index.ts`.

## Step 4: Showcase Integration
1. Open or create the component screen in `app/showcase/[component-name].tsx` AND update the main responsive showcase at `app/index.tsx`.
2. Render an interactive demo screen displaying:
   - All variants side by side.
   - All size variations.
   - Disabled and loading states.
   - Live interaction verification.
   - Responsive behavior in both Desktop workbench and Mobile layouts.
