<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'
  import Icon from '$lib/components/Icon/Icon.svelte'
  import LoadingSVG from '$lib/icons/loading.svg?raw'

  export let title: string | undefined = undefined
  export let icon: IconId | undefined = undefined
  export let kind: 'primary' | 'secondary' | 'tertiary' | 'negative'
  export let size: 'large' | 'medium' | 'small'
  export let disabled: boolean = false
  export let loading: boolean = false
  export let pressed: boolean = false
  export let type: 'type-button' | 'type-button-icon' | 'type-button-menu' | 'type-button-icon-menu'
</script>

<button
  class="ui-medium-14 {kind} {size} {type}"
  class:loading
  class:pressed
  disabled={loading || disabled}
  on:click
>
  {#if loading}
    <!-- eslint-disable svelte/no-at-html-tags -->
    <div class="icon animate">{@html LoadingSVG}</div>
  {:else if icon}<div class="icon"><Icon {icon} /></div>{/if}
  {#if title}<span>{title}</span>{/if}
</button>

<style lang="scss">
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: var(--spacing-1);

    box-sizing: border-box;
    border: 1px;
    border-style: solid;

    .icon {
      width: var(--spacing-2_5);
      height: var(--spacing-2_5);

      &.animate {
        animation: rotate 2s linear infinite;
      }
    }

    &:focus {
      outline: 2px solid var(--global-focus-BorderColor);
      outline-offset: 2px;
    }
    &.type-button-icon,
    &.type-button-icon-menu {
      padding: 0;
    }
    &.large {
      height: var(--spacing-6);
      border-radius: var(--medium-BorderRadius);

      &.type-button,
      &.type-button-menu {
        padding: 0 var(--spacing-2);
      }
      &.type-button-icon,
      &.type-button-icon-menu {
        width: var(--spacing-6);
      }
    }
    &.medium {
      height: var(--spacing-5);
      border-radius: var(--medium-BorderRadius);

      &.type-button,
      &.type-button-menu {
        padding: 0 var(--spacing-2);
      }
      &.type-button-icon,
      &.type-button-icon-menu {
        width: var(--spacing-5);
      }
    }
    &.small {
      height: var(--spacing-4);
      border-radius: var(--small-BorderRadius);

      &.type-button,
      &.type-button-menu {
        padding: 0 var(--spacing-1_5);
      }
      &.type-button-icon,
      &.type-button-icon-menu {
        width: var(--spacing-4);
      }
    }

    &.primary {
      border-color: var(--button-primary-BorderColor);
      background-color: var(--button-primary-BackgroundColor);

      .icon {
        fill: var(--button-accent-IconColor);
      }
      span {
        color: var(--button-accent-LabelColor);
      }
      &:hover {
        background-color: var(--button-primary-hover-BackgroundColor);
      }
      &:active,
      &.pressed {
        background-color: var(--button-primary-active-BackgroundColor);
      }
      &.type-button-menu:enabled:active,
      &.type-button-icon-menu:enabled:active,
      &.pressed {
        border-color: var(--button-menu-active-BorderColor);
      }
      &:disabled:not(.loading) {
        background-color: var(--button-disabled-BackgroundColor);
        border-color: transparent;
        cursor: not-allowed;

        .icon {
          fill: var(--button-disabled-IconColor);
        }
        span {
          color: var(--button-disabled-LabelColor);
        }
      }
      &.loading {
        background-color: var(--button-primary-active-BackgroundColor);

        span {
          color: var(--button-primary-loading-LabelColor);
        }
      }
    }

    &.secondary {
      border-color: var(--button-secondary-BorderColor);
      background-color: var(--button-secondary-BackgroundColor);

      .icon {
        fill: var(--button-subtle-IconColor);
      }
      span {
        color: var(--button-subtle-LabelColor);
      }
      &:hover {
        background-color: var(--button-secondary-hover-BackgroundColor);
      }
      &:active,
      &.pressed {
        background-color: var(--button-secondary-active-BackgroundColor);
      }
      &.type-button-menu:enabled:active,
      &.type-button-icon-menu:enabled:active,
      &.pressed {
        border-color: var(--button-menu-active-BorderColor);
      }
      &:disabled:not(.loading) {
        background-color: var(--button-disabled-BackgroundColor);
        border-color: transparent;
        cursor: not-allowed;

        .icon {
          fill: var(--button-disabled-IconColor);
        }
        span {
          color: var(--button-disabled-LabelColor);
        }
      }
      &.loading {
        background-color: var(--button-secondary-active-BackgroundColor);

        span {
          color: var(--button-disabled-LabelColor);
        }
      }
    }

    &.tertiary {
      border-color: transparent;
      background-color: transparent;

      .icon {
        fill: var(--button-subtle-IconColor);
      }
      span {
        color: var(--button-subtle-LabelColor);
      }
      &:hover:enabled {
        background-color: var(--button-tertiary-hover-BackgroundColor);
      }
      &:active:enabled,
      &.pressed:enabled {
        background-color: var(--button-tertiary-active-BackgroundColor);
      }
      &.type-button-menu:active:enabled,
      &.type-button-icon-menu:active:enabled,
      &.pressed:enabled {
        border-color: var(--button-menu-active-BorderColor);
      }
      &:disabled:not(.loading) {
        border-color: transparent;
        cursor: not-allowed;

        .icon {
          fill: var(--button-disabled-IconColor);
        }
        span {
          color: var(--button-disabled-LabelColor);
        }
      }
      &.loading {
        background-color: var(--button-tertiary-active-BackgroundColor);

        span {
          color: var(--button-disabled-LabelColor);
        }
      }
    }

    &.negative {
      border-color: var(--button-negative-BorderColor);
      background-color: var(--button-negative-BackgroundColor);

      .icon {
        fill: var(--button-accent-IconColor);
      }
      span {
        color: var(--button-accent-LabelColor);
      }
      &:hover {
        background-color: var(--button-negative-hover-BackgroundColor);
      }
      &:active,
      &.pressed {
        background-color: var(--button-negative-active-BackgroundColor);
      }
      &.type-button-menu:enabled:active,
      &.type-button-icon-menu:enabled:active,
      &.pressed {
        border-color: var(--button-menu-active-BorderColor);
      }
      &:disabled:not(.loading) {
        background-color: var(--button-disabled-BackgroundColor);
        border-color: transparent;
        cursor: not-allowed;

        .icon {
          fill: var(--button-disabled-IconColor);
        }
        span {
          color: var(--button-disabled-LabelColor);
        }
      }
      &.loading {
        background-color: var(--button-negative-active-BackgroundColor);

        span {
          color: var(--button-negative-loading-LabelColor);
        }
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
</style>
