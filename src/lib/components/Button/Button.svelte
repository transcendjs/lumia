<script lang="ts">
  import type { IconId } from "$lib/icons.js"
  import Icon from '$lib/components/Icon/Icon.svelte'

	export let title: string
  export let kind: 'primary' | 'secondary' = 'secondary'
  export let size: 'large' | 'small' = 'large'
  export let icon: IconId | undefined = undefined
</script>

<button 
  class:primary={kind === 'primary'}
  class:secondary={kind === 'secondary'}
  class:large={size === 'large'}
  class:small={size === 'small'}
>
  {#if icon}<div class="icon"><Icon {icon}/></div>{/if}  
  {title}
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

</style>
