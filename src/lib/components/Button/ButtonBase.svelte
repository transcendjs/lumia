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
</script>

<button class="{kind} {size}" class:loading disabled={loading || disabled}>
  {#if loading}
    <!-- eslint-disable svelte/no-at-html-tags -->
    <div class="icon animate">{@html LoadingSVG}</div>
  {:else if icon}<div class="icon"><Icon {icon} /></div>{/if}
  {#if title}<span>{title}</span>{/if}
</button>

<style lang="scss">
  button {
    font: inherit;
    font-weight: 500;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: var(--spacing-1);

    .icon {
      width: var(--spacing-2_5);
      height: var(--spacing-2_5);

      &.animate {
        animation: rotate 2s linear infinite;
      }
    }

    &:not(.tertiary) {
      border-width: 1px;
      border-style: solid;
    }

    &:focus {
      outline: 2px solid var(--global-focus-BorderColor);
      outline-offset: 2px;
    }

    &.large {
      height: var(--spacing-6);
      padding: var(--spacing-1_5) var(--spacing-2);
      border-radius: var(--medium-BorderRadius);
    }
    &.medium {
      height: var(--spacing-5);
      padding: var(--spacing-1) var(--spacing-2);
      border-radius: var(--medium-BorderRadius);
    }
    &.small {
      height: var(--spacing-4);
      padding: var(--spacing-1) var(--spacing-1_5);
      border-radius: var(--small-BorderRadius);
    }

    &.primary {
      border-color: var(--button-primary-BorderColor);
      background-color: var(--button-primary-BackgroundColor);

      &:hover {
        background-color: var(--button-primary-hover-BackgroundColor);
      }
      &:active,
      &.loading {
        background-color: var(--button-primary-active-BackgroundColor);
      }
      &.loading span {
        color: var(--button-primary-loading-LabelColor);
      }
    }

    &.secondary {
      border-color: var(--button-secondary-BorderColor);
      background-color: var(--button-secondary-BackgroundColor);

      &:hover {
        background-color: var(--button-secondary-hover-BackgroundColor);
      }
      &:active,
      &.loading {
        background-color: var(--button-secondary-active-BackgroundColor);
      }
      &.loading span {
        color: var(--button-disabled-LabelColor);
      }
    }

    &.tertiary {
      border: none;
      background-color: transparent;

      &:not(:disabled) {
        &:hover {
          background-color: var(--button-tertiary-hover-BackgroundColor);
        }
        &:active {
          background-color: var(--button-tertiary-active-BackgroundColor);
        }
      }
      &.loading {
        background-color: var(--button-tertiary-active-BackgroundColor);
      }
      &.loading span {
        color: var(--button-disabled-LabelColor);
      }
    }

    &.negative {
      border-color: var(--button-negative-BorderColor);
      background-color: var(--button-negative-BackgroundColor);

      &:hover {
        background-color: var(--button-negative-hover-BackgroundColor);
      }
      &:active,
      &.loading {
        background-color: var(--button-negative-active-BackgroundColor);
      }
      &.loading span {
        color: var(--button-negative-loading-LabelColor);
      }
    }

    &:not(:disabled) {
      &.primary,
      &.negative {
        .icon {
          fill: var(--button-accent-IconColor);
        }
        span {
          color: var(--button-accent-LabelColor);
        }
      }
      &.secondary,
      &.tertiary {
        .icon {
          fill: var(--button-subtle-IconColor);
        }
        span {
          color: var(--button-subtle-LabelColor);
        }
      }
    }
    &:disabled:not(.loading) {
      border: none;
      cursor: not-allowed;

      &:not(.tertiary) {
        background-color: var(--button-disabled-BackgroundColor);
      }
      .icon {
        fill: var(--button-disabled-IconColor);
      }
      span {
        color: var(--button-disabled-LabelColor);
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
