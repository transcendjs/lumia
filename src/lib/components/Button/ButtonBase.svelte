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
  export let kind: 'primary' | 'secondary'
  export let size: 'large' | 'small'
  export let loading: boolean
</script>

<button
  class:primary={kind === 'primary'}
  class:secondary={kind === 'secondary'}
  class:large={size === 'large'}
  class:small={size === 'small'}
>
  {#if loading}
    <div class="icon animate">{@html LoadingSVG}</div>
  {:else}
    {#if icon}<div class="icon"><Icon {icon} /></div>{/if}
  {/if}
  {#if title}{title}{/if}
</button>

<style lang="scss">
  button {
    font: inherit;
    font-weight: 500;

    display: inline-flex;
    vertical-align: middle;

    border-width: 1px;
    border-style: solid;

    &:focus {
      outline: 2px solid var(--global-focus-BorderColor);
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
    }

    .icon.animate {
      animation-name: rotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;    
    }

    &.large {
      gap: var(--spacing-1);
      height: var(--spacing-6);
      padding: var(--spacing-2);

      border-radius: var(--border-radius-medium);
    }

    &.small {
      gap: 0.25rem;
      height: 2rem;
      padding: 0.5rem;

      border-radius: var(--border-radius-small);
    }

    &.primary {
      border-color: var(--button-primary-BorderColor);
      background-color: var(--button-primary-BackgroundColor);
      color: var(--button-primary-LabelColor);

      .icon {
        fill: var(--button-primary-LabelColor);
      }

      &:hover {
        background-color: var(--button-primary-hover-BackgroundColor);
      }

      &:active {
        background-color: var(--button-primary-active-BackgroundColor);
      }
    }

    &.secondary {
      border-color: var(--button-secondary-BorderColor);
      background-color: var(--button-secondary-BackgroundColor);
      color: var(--button-secondary-LabelColor);

      .icon {
        fill: var(--button-secondary-LabelColor);
      }

      &:hover {
        background-color: var(--button-secondary-hover-BackgroundColor);
      }

      &:active {
        background-color: var(--button-secondary-active-BackgroundColor);
      }
    }
  }

  @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }

</style>
